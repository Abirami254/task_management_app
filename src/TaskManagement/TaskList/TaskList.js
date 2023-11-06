import React, { useState } from "react";
import TaskListArray from "../tasklist.json";
import { useNavigate } from "react-router-dom";
import Add from "../../Assets/Icons/add_circle.png";

function TaskList() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState(TaskListArray);

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-semibold">Task List</h1>
        <button
          onClick={() => navigate("/AddTask")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex flex-row"
        >
          <img src={Add} alt="Add" />
          <div>Add Task</div>
        </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-300">
            <th className="w-1/5 text-start p-1">Task Name</th>
            <th className="w-1/5 text-start p-1">Task Description</th>
            <th className="w-1/5 text-start p-1">Start Date</th>
            <th className="w-1/5 text-start p-1">End Date</th>
            <th className="w-1/5 text-start pl-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList && taskList.length > 0 ? (
            taskList.map((data) => (
              <tr key={data.id} className="border-b-2">
                <td className="w-1/5">{data.Taskname}</td>
                <td className="w-1/5">{data.Taskdescription}</td>
                <td className="w-1/5">{data.Startdate}</td>
                <td className="w-1/5">{data.Enddate}</td>
                <td className="flex flex-row justify-around flex-wrap p-2 ">
                  <div
                    className="text-blue-950 m-1 hover:bg-blue-600 hover:text-white  border-blue-500 border-2 px-3 py-2 rounded-md cursor-pointer"
                    onClick={() => navigate(`/EditTask/${data.id}`)}
                  >
                    Edit Task
                  </div>
                  <div
                    className="text-red-500 m-1 hover:bg-red-600 hover:text-white border-2 border-red-500 px-3 py-2 rounded-md cursor-pointer"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete Task
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-2 text-center text-gray-500">
                No tasks added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
