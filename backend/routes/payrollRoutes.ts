import { Router } from "express";
import { calculatePayroll } from "../app/payroll";
import { getEmployeeData } from "../db/employee";
import { TaxStrategyFactory } from "../strategies/TaxStrategyFactory";

const router = Router();

// backend/routes/payrollRoutes.ts
router.get("/:employeeId", async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Step 1: fetch employee record from DB
    const employee = await getEmployeeData(employeeId);
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    // Step 2: determine tax strategy
    const strategy = TaxStrategyFactory.create(employee.maritalStatus, employee.payType);
    if (!strategy) throw new Error("No matching tax strategy");

    // Step 3: calculate tax
    const tax = strategy.calculate(employee.grossPay);

    // Step 4: return info
    res.json({
      employeeId,
      grossPay: employee.grossPay,
      maritalStatus: employee.maritalStatus,
      payType: employee.payType,
      tax
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
