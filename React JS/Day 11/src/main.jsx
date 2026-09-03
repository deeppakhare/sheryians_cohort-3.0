import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateCartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CreateCartContextProvider>
    <App />
  </CreateCartContextProvider>,
);
