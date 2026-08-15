import React, { useState } from "react";

const Login = ({ setToggle, user }) => {

  // console.log("USERS", user);
  
  const [check, setCheck] = useState({
    email:"",
    password:""
  });

  
  const handelChnage = (e) => {
    let {name,value} = e.target;
    setCheck((prev) => ({...prev,[name]:value}))
    console.log(check);
    
  }
  const handelLogIn = (e) => {
    e.preventDefault();
    alert("Enter valid data")
  };

  return (
    <div className="bg-green-200 flex flex-col justify-evenly border-2 rounded-2xl w-100 h-90 gap-3 p-6 text-2xl font-mono">
      <div className="flex justify-center items-center">
        <h1>Login Form</h1>
      </div>
      <form onSubmit={handelLogIn} className="flex flex-col gap-6 " action="">
        <input name="email" onChange={handelChnage} required  type="text" placeholder="Enter Email" className="border p-1" />
        <input name="password" onChange={handelChnage} required 
          type="password"
          placeholder="Enter Password"
          className="border p-1"
        />
        <button className="border rounded p-3 hover:bg-amber-400">Login</button>
      </form>
      <div className="flex justify-center items-center text-xl">
        <p>
          Dont have account ? {""}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-400 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
