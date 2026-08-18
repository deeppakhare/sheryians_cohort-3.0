import React, { useState } from "react";
import Form from "./components/Form";
import Form2 from "./components/Form2";

const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-amber-500">
      {toggle? <Form toggle={setToggle}/> : <Form2 toggle={setToggle}/>}
    </div>
  );
};

export default App;
