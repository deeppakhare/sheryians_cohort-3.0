import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form2 = ({toggle}) => {
    const [data, setData] = useState({})
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (e) => {
    setData(e);
    reset();
  };
  return (
    <div className="h-full w-full bg-amber-200 border-2 p-50 flex flex-col gap-3">
      <div className="w-full flex gap-5 justify-center">
        <button onClick={(e) => toggle(true)} className="text-black border-2 p-2 rounded ">Try useref</button>
        <button onClick={(e) => toggle(false)} className="text-black border-2 p-2 rounded bg-green-500">Try RHF</button>
      </div>
      <h1 className="text-xl mb-3 flex justify-center font-extrabold ">
        Form handling using "<span className="underline"> React Hook Form</span>
        "
      </h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        action=""
        className="border-2 border-amber-900 flex flex-col text-black gap-10 p-9 "
      >
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Enter Full Name"
          className="border-2 p-2 "
        />
        <input
          {...register("email")}
          required
          type="email"
          placeholder="Enter Email"
          className="border-2 p-2"
        />
        <input
          {...register("password")}
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

export default Form2;
