import React from "react";
import TaskImg from "../Assets/management1.png";
import Arrow from "../Assets/Icons/arrow.png";
import { useNavigate } from "react-router-dom";

function Task() {
  const navigate = useNavigate();

  return (
    <div className="p-2 over md:p-8 lg:p-16 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <div className="font-bold text-4xl md:text-8xl mb-4">Welcome to</div>
        <div className="font-bold text-2xl md:text-3xl">
          the Ultimate{" "}
          <span className="text-blue-600">Task Management Hub!</span>
        </div>
        <div className="p-2 md:p-5 shadow-2xl rounded-xl text-center md:text-left mt-4">
          <div>
            "Stay organized, boost productivity, and reach your goals with our
            expert task management tips and tools. Get started today! Task
            management isn't just about productivity; it's a path to personal
            growth. Achieve your goals and maintain balance in your life."
          </div>
          <div className="bg-blue-600 rounded-xl p-2 mt-4">
            <div
              onClick={() => {
                navigate("/TaskList");
              }}
              className="flex flex-row items-center justify-center text-white text-lg md:text-xl"
            >
              Go to TaskList
              <img src={Arrow} alt="Arrow" className="ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center md:mt-0">
        <img src={TaskImg} alt="Task" width={400} height={500} />
      </div>
    </div>
  );
}

export default Task;
