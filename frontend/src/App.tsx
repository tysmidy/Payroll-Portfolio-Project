import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PayrollPage from "./payInterface";
import TimecardPage from "./TimeInterface";
import "../styling/navbar.css"

const App: React.FC = () => {
  return (
    <div className="navbar">
      <nav className="nav-bar-2">
        <Link to="/" className="home-button"> Home page </Link>
        <Link to="/timecard" className="time-button"> Timecard </Link>
        <Link to="/payroll" className="pay-button"> Payroll </Link>
      </nav>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/timecard" element={<TimecardPage />} />
        <Route path="/payroll" element={<PayrollPage />} />
      </Routes> 
    </div>
  );
};

export default App;
