import React, { useState } from "react";
import PayrollForm from "./PayrollForm";
import PayrollResults from "./PayrollResults";

const App: React.FC = () => {
  const [grossPay, setGrossPay] = useState<number | null>(null);
  const [taxes, setFedTax] = useState<number | null>(null);

  const handleFormSubmit = async (employeeId: string, hours: number, rate: number) => {
    try {
      const response = await fetch("http://localhost:5000/payroll/payData", {
        method: "POST",   // must match backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId, hours, rate }),
      });

      if (!response.ok) throw new Error("Failed to fetch payroll data");

      const data = await response.json();
      setGrossPay(data.grossPay);
      setFedTax(data.taxes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <PayrollForm onSubmit={handleFormSubmit} />
      <PayrollResults grossPay={grossPay} taxes={taxes} />
    </div>
  );
};

export default App;
