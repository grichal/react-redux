import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,editTask } from "../app/features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
function TaskForm() {
  const [task, setTask] = useState({
    task: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id.id){
      dispatch(editTask(task))
    }else{
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (id.id) {
      setTask(tasks.find((task) => task.id === id.id))
    }
  }, [id.id,tasks]);


  return (
    <div>
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="" className="block text-sx font-bold mb-2">task</label>
      <input
      className="w-full p-2 rounded-md"
        value={task.task}
        name="task"
        type="text"
        onChange={handleChange}
        placeholder="task"
      />
      <label className="block text-sx font-bold mb-2" htmlFor="">decs</label>

      <textarea
       className="w-full p-2 rounded-md"
        value={task.description}
        name="description"
        onChange={handleChange}
        placeholder="description"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1" >enviar</button>
    </form>
    <Carousel width={500}>
                <div>
                    <img src="https://th.bing.com/th/id/R.abb5e2f3a89fe5f1871d9e13555a4cfb?rik=Gw6033iUygmZPQ&riu=http%3a%2f%2fcdn.marketing4ecommerce.net%2fwp-content%2fuploads%2f2017%2f01%2f02204956%2fqu%c3%a9-es-una-imagen-vectorial.jpg&ehk=HTmTsIAUN71R1e1kAp3MB6q0dm57GQVLk2TwmRfmuds%3d&risl=&pid=ImgRaw&r=0" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/R.abb5e2f3a89fe5f1871d9e13555a4cfb?rik=Gw6033iUygmZPQ&riu=http%3a%2f%2fcdn.marketing4ecommerce.net%2fwp-content%2fuploads%2f2017%2f01%2f02204956%2fqu%c3%a9-es-una-imagen-vectorial.jpg&ehk=HTmTsIAUN71R1e1kAp3MB6q0dm57GQVLk2TwmRfmuds%3d&risl=&pid=ImgRaw&r=0" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/R.abb5e2f3a89fe5f1871d9e13555a4cfb?rik=Gw6033iUygmZPQ&riu=http%3a%2f%2fcdn.marketing4ecommerce.net%2fwp-content%2fuploads%2f2017%2f01%2f02204956%2fqu%c3%a9-es-una-imagen-vectorial.jpg&ehk=HTmTsIAUN71R1e1kAp3MB6q0dm57GQVLk2TwmRfmuds%3d&risl=&pid=ImgRaw&r=0" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  );
}

export default TaskForm;
