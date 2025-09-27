import React, { useState } from "react";
import PayrollForm from "./PayrollForm";
import PayrollResults from "./PayrollResults";

const PayrollCalculator: React.FC = () => {
  const [grossPay, setGrossPay] = useState<number | null>(null);
  const [taxes, setTaxes] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: {
    employeeId: string;
    rate: number;
    hours: number;
    payType: string;
    marrigeStatus: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/payroll/payData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to calculate payroll");

      const data = await response.json();
      setGrossPay(data.grossPay);
      setTaxes(data.taxes);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Payroll Calculator</h2>
      <PayrollForm onSubmit={handleFormSubmit} loading={loading} />
      <PayrollResults grossPay={grossPay} taxes={taxes} error={error} />
    </div>
  );
};

export default PayrollCalculator;
