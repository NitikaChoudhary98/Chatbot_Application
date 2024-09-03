import React, { useState } from "react";
import UserDetails from "./UserDetails";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  function handleDetails() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="w-full bg-blue-950 h-20 flex justify-between items-center ">
        <div className="text-white mx-4 text-xl font-bold">
          Chat Application
        </div>
        <div className=" mx-4  cursor-pointer">
          <img
            className="w-[70px] h-[70px]  rounded-full "
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="user"
            onClick={handleDetails}
          ></img>{" "}
        </div>
      </div>
      {toggle ? <UserDetails /> : " "}
    </>
  );
};

export default Home;
