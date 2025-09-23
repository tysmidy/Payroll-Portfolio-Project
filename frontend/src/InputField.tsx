import React, { useState } from "react";

type InputFieldProps = {
  onSubmit: (data: { employeeId: string; hours: number; rate: number }) => void;
};

//declare our funtion that will be used in ProcessPayroll.ts
export default function InputField({onSubmit}: InputFieldProps) {
    const [employeeId, setEmployeeId] = useState("");
    const [hours, setHours] = useState(0);
    const [rate, setRate] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit ({ employeeId, hours, rate });
    }

    //return our HTML from the submits
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
}
/*     return <form className="inputEEID">
        <input type="input" placeholder="Enter in a employee ID"
        className="input_box"/>
        <button className="input_EEID" 
        type="submit"> Get Employee by Id </button>
    </form>
    
}; */


