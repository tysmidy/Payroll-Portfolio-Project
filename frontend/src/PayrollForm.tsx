import React, { useState } from "react";

interface PayrollFormProps {
  onSubmit: (
    employeeId: string,
    rate: number,
    hours: number) => void;
};

const PayrollForm: React.FC<PayrollFormProps> = ({ onSubmit}) => {
  const [employeeId, setEmployeeId] = useState("");
  const [rate, setRate] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(employeeId, rate, hours);
  };

  return (

    <div>
      <div id="top-div"> 
        <h1>Process Payroll</h1>
        <br />
          <div id="project-paragrah">
            <p>Welcome to my <span>Payroll Project</span></p>
          
            <p>Processing Payroll is a modern day issue that may business’s face 
              and that may of us take for granted. 
              If company's don’t process payroll, 
              then we as employee’s don’t get paid. 
              I built this for employees to confirm that 
              your paychecks are always correct</p>
          </div>
      </div>
      <div id="submit-div">
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow">
          <label>
            Employee ID:


            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}/>
          </label>
      
          <label> 
            Hours Worked:
            <input
             type="number"
              value={hours} onChange={(e) => setHours(Number(e.target.value))} />

          </label>
      
          <label>
          Employee Rate:
            <input
              type="number"
              value={rate}onChange={(e) => setRate(Number(e.target.value))} />
            </label>



          <button type="submit">Calculate Payroll</button>
        </form>
      </div>
    </div>
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


