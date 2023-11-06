import React, { useState } from "react";
import TaskListArray from "../tasklist.json";
import { useNavigate } from "react-router-dom";
import AddTaskImg from "../../Assets/Task.jpg";

function AddTask() {
  const navigate = useNavigate(); //for navigation purpose
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isAddButtonDisabled =
    !taskName || !taskDescription || !startDate || !endDate; // for validation purpose
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAddButtonDisabled) {
      alert("Fill all fields");
      return;
    }
    const uniqueId = Math.random();
    const name = taskName;
    const description = taskDescription;
    const startingDate = startDate;
    const endingDate = endDate;

    TaskListArray.push({
      id: uniqueId,
      Taskname: name,
      Taskdescription: description,
      Startdate: startingDate,
      Enddate: endingDate,
    });
    navigate("/TaskList");
  };
  return (
    <div className=" w-full h-screen ">
      <div className="h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500  flex justify-center items-center">
        <div className="text-white text-4xl">Add Task</div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img src={AddTaskImg} alt="AddTaskImg" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col w-11/12 m-auto border-2 p-2 rounded-2xl">
            <input
              placeholder="Task Name"
              className="p-4 shadow-md border-2 rounded-lg m-1"
              required
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              placeholder="Task description"
              className="p-4 shadow-md border-2 rounded-lg m-1"
              required
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input
              placeholder="Start date"
              type="date"
              className="p-4 shadow-md border-2 rounded-lg m-1"
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              placeholder="End date"
              type="date"
              className="p-4 shadow-md border-2 rounded-lg m-1"
              required
              onChange={(e) => setEndDate(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <div
                className="bg-blue-400 flex justify-center items-center p-2 m-3 rounded-xl"
                onClick={(e) => handleSubmit(e)}
              >
                <div className="text-white font-bold">Add Task</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
