import React from "react";
import { Link } from "react-router-dom";
import "../styling/homeStyle.css"

const HomePage: React.FC = () => {
  return (
    <div className="top-div">
      <h1 className="PayrollDashboard">Payroll <span>Project</span></h1>

      <p>This software is used to process payroll, track time, and employee
        information.</p>
      <br/>
      <p>Use this software as you would any HCM system. Please see the readMe in my GitHub to see my progress with building out this passion project.</p>
      <br/>


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
