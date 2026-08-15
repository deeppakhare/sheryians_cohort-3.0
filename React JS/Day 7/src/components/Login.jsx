// import React, { useState } from "react";
// import Welcome from "./Welcome";

// const Login = ({ setToggle, user }) => {
  
//   const [check, setCheck] = useState({
//     email:"",
//     password:""
//   });

//     const [isLogged, setIsLogged] = useState(false);
//     const [loggedInUser, setLoggedInUser] = useState(null);
//   const handelChnage = (e) => {
//     let {name,value} = e.target;
//     setCheck((prev) => ({...prev,[name]:value}))
    
//   }
//   const handelLogIn = (e) => {
//     e.preventDefault();
    
//     const foundUSer = user.find((elem) => elem.email === check.email && elem.password === check.password);

//     if(foundUSer) {
//       setLoggedInUser(foundUSer);
//       setIsLogged(true);
//     } else {
//       alert("Invalid email & password")
//     }
//   };

//   if(isLogged) {
//     return <Welcome user={loggedInUser}/>
//   }
//   return (
//     <div className="bg-green-200 flex flex-col justify-evenly border-2 rounded-2xl w-100 h-90 gap-3 p-6 text-2xl font-mono">
//       <div className="flex justify-center items-center">
//         <h1>Login Form</h1>
//       </div>
//       <form onSubmit={handelLogIn} className="flex flex-col gap-6 " action="">
//         <input name="email" onChange={handelChnage} required  type="text" placeholder="Enter Email" className="border p-1" />
//         <input name="password" onChange={handelChnage} required 
//           type="password"
//           placeholder="Enter Password"
//           className="border p-1"
//         />
//         <button className="border rounded p-3 hover:bg-amber-400">Login</button>
//       </form>
//       <div className="flex justify-center items-center text-xl">
//         <p>
//           Dont have account ? {""}
//           <span
//             onClick={() => setToggle((prev) => !prev)}
//             className="text-blue-400 cursor-pointer"
//           >
//             Sign in
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;










































import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  )
}

export default Login


