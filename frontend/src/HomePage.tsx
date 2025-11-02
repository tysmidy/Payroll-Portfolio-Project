import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-8">Company Payroll System</h1>

      <div className="flex justify-center gap-6">
        <Link
          to="/timecard"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Go to Timecard
        </Link>
        <Link
          to="/payroll"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          Process Payroll
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
