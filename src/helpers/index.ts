import { getEmployeeById } from '../db/employees'
 

//building out function to calculate straight gross pay and will not require a res req
//This is now just STRAIGT LOGIC
// Can easily add calculation in here for salary and make it return that amount for tax cals
export type GrossResult = {
    employeeId: string,
    grossPay: number
};;

export async function calculateGrossPay(
    employeeId: string,
    rate: number,
    hours: number
): Promise<GrossResult> {
    if (!employeeId) throw new Error("missing employeeID");
    const employeeRate = Number(rate);
    const employeeHours = Number(hours);
    //throw error if not a number
    if (Number.isNaN(employeeRate) || Number.isNaN(employeeHours)) {
        throw new Error("Rate and Hours must be numbers")
    }

    //do the DB calls here and return them
    const employee = await getEmployeeById(employeeId);
    //error
    if(!employee){
        console.log("could not find ee with that id");
    };
    const grossPay = employeeRate * employeeHours;
    return {employeeId, grossPay}
}



/* = async ( employeeId: string, rate: number, hours: number ) => {
    if (!employeeId){
        console.log("Could not find employee id to calculate gross pay.");
    };

        //make sure that the employee exist in the DB
        const employee = await getEmployeesById(employeeId).select('+employee.employeeId +employee.rate +employee.hours' );

        //error if it could not grab that id
        if(!employee){
            console.log("Could not assign that data to a variable");
        }

        //name gross that will be used elsewhere in the system
        const grossPay = hours * rate;

        return{
            employeeId,
            grossPay
        }
} */