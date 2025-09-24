import express from 'express';
import { getEmployees, getEmployeesByIdAndRate } from '../db/employees'
import { createEmployee } from '../db/employees'
//import { grossData } from '../helpers/index'
import { getTaxdata } from '../db/tax';

//this will actually be the funtion to grab pay data to process the gross roll
export const grossPayData = async (req: express.Request, res: express.Response) => {
    try {
        const { employeeId, rate, hours} = req.body;

        if (!employeeId) {
            console.log("Cannot get employee ID. Error 1")
            return res.sendStatus(400);
        }

        const employee = await getEmployeesByIdAndRate(employeeId, rate ).select('+employee.employeeId +employee.rate +employee.hours' )
        if (!employee) {
            console.log("Could not get from getEmployeesByIdAndRate. Error 2");
            return res.sendStatus(400);
        }
        //actually doing the calculation
        
        const grossPay = rate * hours;
        res.sendStatus(200)
        return res.json({
            employeeId,
            grossPay,
            status2: "processed"
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}



//we'll go ahead and build our tax info here. Not sure on how I wanna build out the rates
export const fedTaxData = async (req: express.Request, res: express.Response) => {
try {
    const { marrigeStatus, payType, hours, rate } = req.body
    if (!marrigeStatus || !payType || !hours || !rate){
        console.log("Could not fetch that requested data. Tax error 1");
        return res.sendStatus(400)};
    

    const fedTaxes = await getTaxdata(marrigeStatus, payType, hours, rate) 
    
    if (!fedTaxes){
        console.log("could not fetch tax data from the system. Tax error 2");
        return res.sendStatus(400)};

        //tomorrow, figure out how to add in the rate tables and grab the needed logic

} catch (error) {
    
}

}





//this is the test requst to gather data we need to actually process a payroll1
export const payDataConfrimation = async (req: express.Request, res: express.Response) => {
    try {
        const { name, position, marrigeStatus, payType, employeeId, rate, status } = req.body;

        //need to make both of these errors more robust, as how it is right now, you'll have to list all 
        //of the below fields to get a payroll calculation, otherwise you just get a 400
        if(!name || !position || !marrigeStatus|| !payType || !employeeId || !rate || !status) {
            return res.sendStatus(400)
        }
        //this is for if someone inputs an invalid ID
        const noEmployeeId = await getEmployees();

        if(!noEmployeeId){
            console.log("Could not find a user by that ID");
            return res.sendStatus(400);
        }

        //adding this logic in here, basiclly the user will have to create a new employee record.
        const employee = await createEmployee({
            name, 
            position, 
            marrigeStatus, 
            payType, 
            employeeId, 
            rate, 
            status
        });
        return res.status(200).json(employee).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}