import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskList from "../TaskManagement/TaskList/TaskList";
import Task from "../TaskManagement/Task";
import AddTask from "../TaskManagement/AddTask/AddTask";
import EditTask from "../TaskManagement/EditTask/EditTask";

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/TaskList" element={<TaskList />} />
      <Route path="/AddTask" element={<AddTask />} />
      <Route path="/EditTask/:id" element={<EditTask />} />
    </Routes>
  );
}

export default RouterComponent;
