// import React from "react";
// import { useState } from "react";

// const Welcome = ({user}) => {

//   return (
//     <div>
//       <div className="bg-pink-300 flex flex-col justify-center items-center w-100 h-100 border-2 border-amber-900 rounded-2xl">
//         <h1 className="text-3xl font-mono font-extrabold underline">
//           Welcome Back {user.name}
//         </h1>
//         <p>We are here to develope the welcome page </p>
//       </div>
//     </div>
//   );
// };

// export default Welcome;








































import React from 'react'

const Welcome = ({data, login}) => {
    console.log(data);

    const handelSubmit = (e) => {
        login(false);
    }
    
  return (
    <div>
       <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">

      {/* Welcome Card */}
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 sm:p-12 text-center shadow-2xl">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
          <span className="text-4xl">👋</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Welcome!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-500">
          We're glad to have you here. Your account has been successfully
          logged in. Explore your dashboard and get started.
        </p>

        {/* User Information */}
        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-400">
            Logged in as
          </p>

          <p className="mt-1 mb-2 text-2xl font-semibold text-slate-800">
            {data.name}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {data.email}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          {/* Dashboard Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
          >
            <span>📊</span>
            Dashboard
          </button>

          {/* Logout Button */}
          <button
          onClick={handelSubmit}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:translate-y-0"
          >
            <span>↪</span>
            Logout
          </button>

        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-slate-400">
          Thank you for choosing our application.
        </p>

      </div>
    </div>
    </div>
  )
}

export default Welcome
