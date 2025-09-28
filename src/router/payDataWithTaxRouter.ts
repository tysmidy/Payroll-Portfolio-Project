import { Router } from "express";
import { payrollData } from '../controllers/payrollConfrimation'

//all payroll in 1 route
export default function PayrollDataRouter(router: Router): void {
  router.post("/payroll/payData", payrollData);
}

