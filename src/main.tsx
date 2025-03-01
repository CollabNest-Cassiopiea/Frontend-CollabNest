import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";  // Import AppRouter
import "./index.css";  // Keep global styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />  {/* Use the AppRouter */}
  </React.StrictMode>
);
