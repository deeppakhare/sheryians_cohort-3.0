import React, { useState } from "react";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import NewForm from "./components/NewForm";
import NewForm2  from "./components/NewForm2";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-amber-500">
      {/* {toggle? <Form toggle={setToggle}/> : <Form2 toggle={setToggle}/>} */}
      {toggle ? (
        <NewForm toggle={setToggle} />
      ) : (
        <NewForm2 toggle={setToggle} />
      )}
    </div>
  );
};

export default App;
