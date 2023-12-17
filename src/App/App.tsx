import React from "react";
import { AnimatedRoutes } from "../components/AnimatedRoutes/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
