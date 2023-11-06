import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskListArray from "../tasklist.json";
import UpdateTaskImg from "../../Assets/TaskList.jpg";

function EditTask() {
  const navigate = useNavigate();
  const [taskId, setTaskId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const index = TaskListArray.map(function (e) {
    return e.id;
  }).indexOf(taskId);

  console.log("taskId", taskId);
  console.log("index", index);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = TaskListArray[index];
    console.log("task", task);
    task.Taskname = taskName;
    task.Taskdescription = taskDescription;
    task.Startdate = startDate;
    task.Enddate = endDate;
    navigate("/TaskList");
  };

  useEffect(() => {
    const storedTaskId = localStorage.getItem("id");
    const storedTask = TaskListArray.find((task) => task.id === storedTaskId);

    if (storedTask) {
      setTaskId(storedTask.id);
      setTaskName(storedTask.Taskname);
      setTaskDescription(storedTask.Taskdescription);
      setStartDate(storedTask.Startdate);
      setEndDate(storedTask.Enddate);
    }
  }, []);

  return (
    <>
      <div className=" w-full h-screen">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img src={UpdateTaskImg} alt="AddTaskImg" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-11/12 m-auto border-2 p-2 rounded-2xl">
              <div className="h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500  flex justify-center items-center rounded-lg">
                <div className="text-white text-4xl">Update Task</div>
              </div>
              <input
                placeholder="Task Name"
                className="p-4 shadow-md border-2 rounded-lg m-1"
                required
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <input
                placeholder="Task description"
                className="p-4 shadow-md border-2 rounded-lg m-1"
                required
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <input
                placeholder="Start date"
                type="date"
                className="p-4 shadow-md border-2 rounded-lg m-1"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                placeholder="End date"
                type="date"
                className="p-4 shadow-md border-2 rounded-lg m-1"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <div className="flex justify-center items-center">
                <div
                  className="bg-blue-400 flex justify-center items-center p-2 m-3 rounded-xl"
                  onClick={(e) => handleSubmit(e)}
                >
                  <div className="text-white font-bold">Update Task</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
