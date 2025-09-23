
import InputField from "./InputField";
import { useState } from "react";
import {grossPayData} from '../../src/controllers/payrollConfrimation'
import { error } from "console";
//declaring my types because freaking typescript
type PayrollResponse = {
    employeeId: string;
    grossPay: number;
    status: string;
};
//creating my function that my backend can use
export default function ProcessPayroll()  {
    const [result, setResult] = useState<PayrollResponse | null>(null);
    
    //make a try catch for troubleshooing
    const submitPayroll = async (data: {employeeId: string, hours: number}) => {

        try {
            const response = await fetch("/api/confR/grossPayData", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data), //pass in the above fields
        });
        if (!response.ok){
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
      
    
    //return our HTML  
    return(
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
    

  

