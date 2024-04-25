import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../app/features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="w-4/6">
        <header className="flex justify-between items-center py-4">
          <h1>tasks {tasks.length}</h1>
          <Link
            className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
            to="/createTask"
          >
            createTask
          </Link>
        </header>
        <div className="grid grid-cols-3  gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md ">
              <header className="flex justify-between">
              <h1>{task.task}</h1>
              <div className="flex gap-x-2">
              <Link className="bg-zinc-600 px-2 py-1 rounded-md" to={`/editTask/${task.id}`}>Edit</Link>
              <button
              
              className="bg-red-500 px-2 py-1 rounded-md self-center"
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                delete
              </button>
             
              </div>
              </header>
              <h2>{task.description}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
