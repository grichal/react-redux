import React from "react";
import {useSelector} from 'react-redux'
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/createTask" element={<TaskForm/>}/>
        <Route path="/editTask/:id" element={<TaskForm/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
