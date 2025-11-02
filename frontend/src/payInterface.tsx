import React, { useState } from "react";
import PayrollForm from "./PayrollForm";
import PayrollResults from "./PayrollResults";

const PayrollPage: React.FC = () => {
  const [grossPay, setGrossPay] = useState<number | null>(null);
  const [taxes, setTaxes] = useState<number | null>(null);

  const handleFormSubmit = async (
    employeeId: string,
    hours: number,
    rate: number
  ) => {
    try {
      const response = await fetch("http://localhost:5000/payroll/payData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeId, hours, rate }),
      });

      if (!response.ok) throw new Error("Failed to fetch payroll data");

      const data = await response.json();
      setGrossPay(data.grossPay);
      setTaxes(data.taxes);
    } catch (error) {
      console.error("Error fetching payroll data", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Process Payroll</h2>
      <PayrollForm onSubmit={handleFormSubmit} />
      <PayrollResults grossPay={grossPay} taxes={taxes} />
    </div>
  );
};

export default PayrollPage;
