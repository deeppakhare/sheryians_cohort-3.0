// import React, { useState } from "react";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Welcome from "./components/Welcome";

// const App = () => {
//   const [toggle, setToggle] = useState(false);
//   const [user, setUser] = useState([]);
//   console.log(user);

//   return (
//     <div className="bg-gray-300 h-screen  flex flex-col justify-center items-center ">
//       {toggle ? (
//          <Login setToggle={setToggle} user={user} />
//       ) : (
//         <Register setToggle={setToggle} setUser={setUser} />
//       )}
      
//     </div>
//   );
// };

// export default App;













































import React from 'react'
import { useState } from 'react'
import Login from './components/Login';
import Register from './components/Register';


const App = () => {

  const [authenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState([]);
  
  console.log(user);
  
  return (
    <div>
      {authenticate? <Login user={setUser} auth={setAuthenticate}/> : <Register user={setUser} auth={setAuthenticate}/>}
    </div>
  )
}

export default App
