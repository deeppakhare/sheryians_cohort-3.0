import React from "react";
import { useState } from "react";

const Welcome = ({user}) => {

  return (
    <div>
      <div className="bg-pink-300 flex flex-col justify-center items-center w-100 h-100 border-2 border-amber-900 rounded-2xl">
        <h1 className="text-3xl font-mono font-extrabold underline">
          Welcome Back {user.name}
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
