import React from "react";

let root = document.querySelector("#root")
let rh1 = React.createElement(
  "h1",
  null,
  "i m this is from react h1"
);

ReactDOM.createElement(root).render(rh1);
