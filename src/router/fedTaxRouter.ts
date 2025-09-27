/* import { Router } from "express";
import { fedTaxData } from "../controllers/payrollConfrimation";

export default function registerFedTaxRoutes(router: Router): void {
  router.post("/confR/fedTaxData", fedTaxData);
} */


/*     try {
        //req
        const { employeeId ,marrigeStatus, payType, hours, rate } = req.body
        //response
        const fedResult = await fedTaxData(employeeId, hours, rate)
        
        if (!employeeId || !hours || !rate) {
          return res.status(400).json({ message: "Missing required fields in tax data" });
        }
        
        const employee = await getEmployeesById(employeeId);
        if(!employee){
          return res.status(404).json({error: "Employee does not exist in tax data"});
        } 
        const grossPay = hours * rate;
        //const fedtax = fedTaxData * hours
        return res.json({
          employeeId: employee.employeeId,
          grossPay,

        })
      catch{

        }

      } */