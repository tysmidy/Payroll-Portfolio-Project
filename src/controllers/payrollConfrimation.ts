import express from 'express';
import {fedTaxCalc} from '../helpers/taxHelper'
import { calculateGrossPay } from '../helpers';

import {getEmployeeById} from '../db/employees'

export const payrollData = async (req: express.Request, res: express.Response) => {
    //both request in 1 body
    try {
    //request
    const { employeeId , hours } = req.body;

    //error handling
    if (!employeeId || !hours ){
        console.log("Could not grab all the data inputed to confirm Payroll.")
        return res.status(400).json;
    }

    const employee = await getEmployeeById(employeeId);
        
        if (!employee) {
            console.log("could not get the employee from the database")
        }

    const { name, position, rate, payType, marrigeStatus, social, status } = employee;
    //gross pay await
    const {grossPay} = await calculateGrossPay(employeeId, rate, hours);

    //fed tax await
    const taxRespose = await fedTaxCalc(employeeId, marrigeStatus, rate, payType, hours)

    //returing everything in 1 json
    return res.json({
      employeeId,
      name,
      position,
      social,
      status,
      payType,
      marrigeStatus,
      rate,
      hours,
      grossPay,
      taxRespose,
      MsgStatus: "Gross pay and Taxes were calculated sucsessfully"
    })

    } catch (error) {
        console.log(error);
        return res.status(400);
        
    };
};


//----this will actually be the funtion to grab pay data to process the gross roll
//changing this to pass in data from the help to make the data more reusable

//export const grossPayData = async (req: express.Request, res: express.Response) => {
    //try {
        //this is the request
/*         const { employeeId, rate, hours} = req.body;
        
        if (!employeeId || !rate || !hours) {
            console.log("Cannot get employee from request body")
            return res.sendStatus(400);
        }
        const employee = await getEmployeesById(employeeId);
        if (!employee) {
            console.log("could not get the employee from the database")
        } */
        //NAMING the actual response
        //const result = await calculateGrossPay(employeeId, rate, hours);

        //got rid of DB logic in here since it was not super reusable
        
        //found the 3 dots online, it'll call thise assign types???
/*         return res.json({
            ...result,
            status2: "processed"
        }); 

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
    
} */



//doing the same on fed tax data that i did with gross pay
//will need to refactor this and the await after building out the DB further
//export const fedTaxData = async (req: express.Request, res: express.Response) => {
//try {
    //request
   // const { employeeId ,marrigeStatus, payType, hours, rate } = req.body
   // if (!employeeId) return res.status(400).json({ message: "Missing employeeId" });
    //response
    //const tax = await fedTaxCalc(employeeId, marrigeStatus, rate, payType, hours)
    
    //return response
/*     return res.json({
        tax,
        status3: "Could not determine tax data"
    })

    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    } 
} */

//tying in both of these together so we are not repeating logic and can execute
//it from 1 button on the front end.



//this is the test requst to gather data we need to actually process a payroll1
/* export const payDataConfrimation = async (req: express.Request, res: express.Response) => {
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

 */