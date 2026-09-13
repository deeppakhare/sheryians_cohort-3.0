import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  let interval = setInterval(() => {
    console.log("hey i m in about");
  }, 1000);

  useEffect(() => {
    console.log("About rendering...");

    // only use when your components leaks some memory
    //  and if you want to track any updates
    return () => {
      clearInterval(interval);
      console.log("i m triggered kuki about jaa chuka hai");
    };
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default About;