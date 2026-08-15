import React, { useState } from "react";

const Register = ({ setToggle,setUser }) => {
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setToggle(true);
  };

  return (
    <div className="bg-green-200 flex flex-col justify-evenly border-2 rounded-2xl w-100 h-90 gap-3 p-6 text-2xl font-mono">
      <div className="flex justify-center items-center">
        <h1>Register Form</h1>
      </div>
      <form onSubmit={handelSubmit} className="flex flex-col gap-4 " action="">
        <input
          required
          value={formData.name}
          name="name"
          onChange={handelChange}
          type="text"
          placeholder="Enter Name"
          className="border p-1"
        />
        <input
          required
          value={formData.email}
          name="email"
          onChange={handelChange}
          type="text"
          placeholder="Enter Email"
          className="border p-1"
        />
        <input
          required
          value={formData.password}
          name="password"
          onChange={handelChange}
          type="password"
          placeholder="Enter Password"
          className="border p-1"
        />
        <button className="border rounded p-3 hover:bg-amber-400">
          Register
        </button>
      </form>
      <div className="flex justify-center items-center text-xl">
        <p>
          Dont have account ?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-400 cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
