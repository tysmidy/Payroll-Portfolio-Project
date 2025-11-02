import React from "react";
import { Link } from "react-router-dom";
import "../styling/homeStyle.css"

const HomePage: React.FC = () => {
  return (
    <div className="top-div">
      <h1 className="PayrollDashboard">Company Payroll System</h1>

      <div className="link-divs" >
        <Link
          to="/timecard"
          className="timecard-home-button"
        >
          Go to Timecard
        </Link>
        <Link
          to="/payroll"
          className="payroll-button"
        >
          Process Payroll
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
