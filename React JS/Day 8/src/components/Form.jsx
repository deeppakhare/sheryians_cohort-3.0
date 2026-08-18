import React, { useRef } from "react";
import { useState } from "react";

const Form = () => {
  const ref = useRef({});
  const [data, setData] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: ref.current.name.value,
      email: ref.current.email.value,
      password: ref.current.password.value,
    };

    setData(obj);
  };
  console.log(data);

  return (
    <div className="h-full w-full bg-amber-200 border-2 p-50 flex flex-col gap-3">
      <h1 className="text-3xl mb-3 flex justify-center font-extrabold ">
        Form handling using "<span className="underline"> useRef</span>"
      </h1>
      <form
        onSubmit={handelSubmit}
        action=""
        className="border-2 border-amber-900 flex flex-col text-black gap-10 p-9 "
      >
        <input
          ref={(e) => (ref.current.name = e)}
          required
          type="text"
          placeholder="Enter Full Name"
          className="border-2 p-2 "
        />
        <input
          ref={(e) => (ref.current.email = e)}
          required
          type="email"
          placeholder="Enter Email"
          className="border-2 p-2"
        />
        <input
          ref={(e) => (ref.current.password = e)}
          required
          type="password"
          placeholder="Enter Password"
          className="border-2 p-2"
        />
        <button className="border-2 p-3 text-xl ">Show Data</button>
      </form>
      <div className="h-35 w-full text-2xl border-2 border-amber-900 flex flex-col text-black gap-2 p-3 ">
        <h1>Name :- {data.name}</h1>
        <h1>Email :- {data.email}</h1>
        <h1>Password :- {data.password}</h1>
      </div>
    </div>
  );
};

export default Form;
