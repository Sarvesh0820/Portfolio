import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import image from "./assets/Background Pattern.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
document.body.style.backgroundImage = `url(${image})`;
document.body.style.backgroundSize = "cover";
