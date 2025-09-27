import React, { useState } from "react";

type PayrollFormProps = {
  onSubmit: (formData: {
    employeeId: string;
    rate: number;
    hours: number;
    payType: string;
    marrigeStatus: string;
  }) => void;
  loading: boolean;
};

const PayrollForm: React.FC<PayrollFormProps> = ({ onSubmit, loading }) => {
  const [employeeId, setEmployeeId] = useState("");
  const [rate, setRate] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [payType, setPayType] = useState("hourly");
  const [marrigeStatus, setMarrigeStatus] = useState("single");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ employeeId, rate, hours, payType, marrigeStatus });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="w-full border p-2 rounded"
        required
      />

      <select
        value={payType}
        onChange={(e) => setPayType(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="hourly">Hourly</option>
        <option value="salary">Salary</option>
      </select>

      <select
        value={marrigeStatus}
        onChange={(e) => setMarrigeStatus(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="single">Single</option>
        <option value="married">Married</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate Payroll"}
      </button>
    </form>
  );
};

export default PayrollForm;




/* export default function InputField({onSubmit}: InputFieldProps) {
    const [employeeId, setEmployeeId] = useState("");
    const [hours, setHours] = useState(0);
    const [rate, setRate] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit ({ employeeId, hours, rate });
    }


return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Rate:
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            required
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
} */
/*     return <form className="inputEEID">
        <input type="input" placeholder="Enter in a employee ID"
        className="input_box"/>
        <button className="input_EEID" 
        type="submit"> Get Employee by Id </button>
    </form>
    
}; */


