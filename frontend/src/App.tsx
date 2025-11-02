import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PayrollPage from "./payInterface";
import TimecardPage from "./TimeInterface";

const App: React.FC = () => {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-4 border-b pb-2">
        <Link to="/">-- Home page</Link>
        <Link to="/timecard">-- Timecard</Link>
        <Link to="/payroll"> --Payroll</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timecard" element={<TimecardPage />} />
        <Route path="/payroll" element={<PayrollPage />} />
      </Routes> 
    </div>
  );
};

export default App;
