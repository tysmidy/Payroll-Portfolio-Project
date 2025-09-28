/* import React, { useState } from "react";
import PayrollForm from "./PayrollForm";
import PayrollResults from "./PayrollResults";

const PayrollCalculator: React.FC = () => {
  const [grossPay, setGrossPay] = useState<number | null>(null);
  const [taxes, setTaxes] = useState<number | null>(null);
  
  const handleFormSubmit = async (formData: {
    employeeId: string;
    rate: number;
    hours: number;

  }) => {


    try {
      const response = await fetch("http://localhost:5000/payroll/payData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to calculate payroll");

      const data = await response.json();

      // ✅ store backend results
      setGrossPay(data.grossPay);
      setTaxes(data.taxes);
    } catch (err: any) {
      console.log("calc error")

  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Payroll Calculator</h2>
      <PayrollForm onSubmit={handleFormSubmit}  />
      <PayrollResults grossPay={grossPay} taxes={taxes}  />
    </div>
  );
};
}

export default PayrollCalculator;
 */