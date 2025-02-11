import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //
import("./bootstrap"); 

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Element with ID 'root' not found");
}
