import { Router } from "express";
//declare the ee model
import { getEmployeesById }  from "../db/employees"; 


export default (router: Router) => {
  router.post("/confR/grossPayData", async (req, res) => {
    //make a try catch block and implement crud logic
    try {
      const { employeeId, hours, rate } = req.body;
      //just validating inputs, throwing error if they don't exist in DB
        if (!employeeId || !hours || !rate) {
          return res.status(400).json({ message: "Missing required fields" });
        }
        //check if eeid is valid
        const employee = await getEmployeesById(employeeId);
        if(!employee){
          return res.status(404).json({error: "Employee does not exist"});
        } 
        //Can add logic here to send to DB file and store past payrolls through .await
        const grossPay = hours * rate;

        return res.json({
        employeeId: employee.employeeId,
        name: employee.name,
        grossPay,
        message: "Processed successfully",
      });
    } catch (err) {
      console.error("Error in grossPayData:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
};
