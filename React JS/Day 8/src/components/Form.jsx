import React from "react";

const Form = () => {
  return (
    <div className="h-full w-full bg-amber-200 border-2 p-50 flex flex-col gap-3">
      <h1 className="text-3xl mb-3 flex justify-center font-extrabold underline">
       Form handling using useRef
      </h1>
      <form
        action=""
        className="border-2 border-amber-900 flex flex-col text-black gap-10 p-9 "
      >
        <input type="text" placeholder="Enter Full Name" className="border-2 p-2 " />
        <input type="text" placeholder="Enter Email" className="border-2 p-2" />
        <input type="password" placeholder="Enter Password" className="border-2 p-2" />
        <button className="border-2 p-3 text-xl ">Show Data</button>
      </form>
      <div className="h-35 w-full text-2xl border-2 border-amber-900 flex flex-col text-black gap-2 p-3 ">
        <h1>Name :- </h1>
        <h1>Email :- </h1>
        <h1>Password :- </h1>
      </div>
    </div>
  );
};

export default Form;
