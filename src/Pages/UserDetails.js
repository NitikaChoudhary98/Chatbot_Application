import React from "react";

const UserDetails = () => {
  return (
    <div className="border-white border-2 w-[300px] absolute top-20 right-2 h-auto shadow-lg ">
      <div className=" relative w-[100%] h-32 bg-yellow-200 p-10 text-center">
        <h1 className="font-bold">Nitika</h1>
      </div>
      <div className="absolute top-20 left-[35%]">
        <img
          className="rounded-full w-[80px] h-[80px] border-2 border-white"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="user profile"
        ></img>
      </div>
      <div className="absolute bottom-24 right-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </div>
      <div>
        <div className="mt-10">
          <p>Nitika Choudhary</p>
          <p>cnitika123@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
