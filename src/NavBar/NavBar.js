import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../Assets/Icons/arrow.png";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-around bg-cyan-500 h-12 items-center ">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-white text-3xl"
        >
          Task Management
        </div>
        <div
          onClick={() => {
            navigate("/TaskList");
          }}
          className="flex flex-row"
        >
          <div className="text-white text-xl ">Go to TaskList</div>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
