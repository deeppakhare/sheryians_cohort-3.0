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

import React from "react";
import { useState } from "react";
import Welcome from "./Welcome";

const Login = ({ auth, user }) => {
  const [checkUser, setCheckUser] = useState({
    email: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const handelCheck = (e) => {
    let { name, value } = e.target;
    setCheckUser((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmitData = (e) => {
    e.preventDefault();

    const foundUser = user.find(
      (a) => a.email === checkUser.email && a.password === checkUser.password,
    );

    if (foundUser) {
      setIsLogged(true);
      setLoggedUser(foundUser);
      setCheckUser({
        email:"",
        password:""
      })
      alert("Log in Sucess");
    } else {
      alert("Invalid Data plese recheck");
      setCheckUser({
        email:"",
        password:""
      })
    }
  };

  if (isLogged) return <Welcome data={loggedUser} login={setIsLogged} />;
  return (
    <div>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
        {/* Register Card */}
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-15 w-14 items-center justify-center rounded-5xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="-40 30 600 500.462"
              >
                <path d="M176.723 304.538c-7.873-8.108-17.766-21.504-19.13-36.46l-1.514.029c-3.484-.047-6.854-.847-10.006-2.645-5.042-2.873-8.591-7.795-10.988-13.352-5.074-11.655-9.096-42.333 3.675-51.102l-2.392-1.59-.269-3.395c-.492-6.174-.617-13.644-.742-21.485-.461-28.844-1.046-63.783-24.233-70.79l-9.951-3.009 6.55-8.111c18.744-23.145 38.319-43.397 58.061-58.941 50.954-40.107 105.847-50.659 150.174 3.228 73.927 7.159 97.553 118.191 46.806 167.224 3.048.112 5.923.813 8.461 2.169 9.666 5.178 9.979 16.405 7.436 25.83-2.509 7.873-5.701 17.008-8.714 24.677-3.652 10.364-9.002 12.295-19.337 11.179-.337 16.436-11.731 30.041-21.567 39.161-3.628 3.363-7.779 6.367-12.332 9.02 5.322 11.712 13.223 19.76 22.832 25.563-4.862 7.097-11.289 13.37-18.733 18.691-18.167 12.986-42.146 20.27-64.81 20.27s-46.643-7.284-64.81-20.27c-6.236-4.456-11.754-9.582-16.242-15.301 7.337-6.955 13.169-16.284 16.906-29.011-5.729-3.309-10.847-7.164-15.131-11.579zm185.463 46.633C422.267 368.294 512 351.278 512 493.88c0 3.626-2.959 6.582-6.592 6.582H6.592c-3.636 0-6.592-2.956-6.592-6.582 0-146.99 96.628-112.639 154.364-135.921 6.226 8.411 14.002 15.824 22.832 22.137 22.233 15.894 51.385 24.807 78.804 24.807 27.419 0 56.571-8.913 78.804-24.807 11.135-7.96 20.597-17.672 27.382-28.925z" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Login to account
            </h1>

            <p className="mt-2 text-sm text-slate-500">Explore your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handelSubmitData} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                    />
                  </svg>
                </div>

                <input
                  onChange={handelCheck}
                  name="email"
                  value={checkUser.email}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 0h10.5A2.25 2.25 0 0 1 19.5 12.75v6A2.25 2.25 0 0 1 17.25 21H6.75a2.25 2.25 0 0 1-2.25-2.25v-6A2.25 2.25 0 0 1 6.75 10.5Z"
                    />
                  </svg>
                </div>

                <input
                  onChange={handelCheck}
                  name="password"
                  value={checkUser.password}
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 active:translate-y-0"
            >
              Login Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200"></div>

            <span className="text-xs text-slate-400">OR</span>

            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          {/* Login */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <span
                onClick={(e) => auth(false)}
                className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
