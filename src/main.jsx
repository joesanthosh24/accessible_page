import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home.page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <footer className="container">
        <p>© Copyright Accessible Knowledge Base 2023</p>
      </footer>
    </Router>
  </React.StrictMode>
);
