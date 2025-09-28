import React from "react";

type PayrollResultsProps = {
  grossPay: number | null;
  taxes: number | null;

};

const PayrollResults: React.FC<PayrollResultsProps> = ({ grossPay, taxes}) => {
  

  if (grossPay === null || taxes === null) return null;

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Payroll Summary</h3>
      <p><strong>Gross Pay:</strong> ${grossPay.toFixed(2)}</p>
      <p><strong>Federal Taxes:</strong> ${taxes.toFixed(2)}</p>
      <p><strong>Net Pay:</strong> ${(grossPay - taxes).toFixed(2)}</p>
    </div>
  );
};

export default PayrollResults;














/* import InputField from "./PayrollForm";
import { useState } from "react";
import { grossPayData } from '../../src/controllers/payrollConfrimation'
import { error } from "console";
 */

//declaring my types because freaking typescript
/* type PayrollResponse = {
    employeeId: string;
    grossPay: number;
    status: string;
}; */
//creating my function that my backend can use
/* export default function ProcessPayroll() {
    const [result, setResult] = useState<PayrollResponse | null>(null);
 */
    //make a try catch for troubleshooing
/*     const submitPayroll = async () => {

        try {
            const response = await fetch("http://localhost:5000/payroll/payData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    employeeId,
                    rate,
                    hours,
                    payType,
                    marrigeStatus
                }),  *///pass in the above fields
/*             });
            if (!response.ok) {
                const err = await response.json();
                console.log(err)
                throw new Error('Server error: ${response.status}');
            }

            const json = await response.json();
            setResult(json)

        } catch (err) {
            console.log("error submitting payroll", err)
        }
    };

 */
    //return our HTML  
/*     return (
        <div>
            <h1>Payroll Processing Interface v2</h1>
            <p>Enter in your employeeid and the application with call the api and pass the data to the front end.
                After that, the data goes through the API/Backend logic and return to the front end
            </p>
            <InputField onSubmit={submitPayroll} />
            {result && (
                <div>
                    <p>Employee ID: {result.employeeId}</p>
                    <p>Gross Pay: ${result.grossPay}</p>
                    <p>Status: {result.status}</p>
                </div>
            )}
        </div>
    );
}
 */






/* return <div id = "top-div" >
    <h1>Payroll Processing</h1>
    <p>Processing Payroll is a modern day issue that may business’s face 
              and that may of us take for granted. 
              If company's don’t process payroll, 
              then we as employee’s don’t get paid. 
              I built this for employees to confirm that 
              your paychecks are always correct.</p>

    <div className= "paydata" id="enter-data">
        <span className="2-heading">Enter in your payroll data</span>
        <InputField />
    </div>
</div> */




