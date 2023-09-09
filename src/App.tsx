import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import "./styles.scss";
import { Home } from "./component/home/home";
import { CustomNavbar } from "./component/navbar/Navbar";

export const App = ()  => {
  return (
    <Router>
      <div className="app">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

 
