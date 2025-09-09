import { Router } from "express";
import { calculatePayroll } from "../app/payroll";

const router = Router();

router.get("/:employeeId/:grossPay", async (req, res) => {
  try {
    const { employeeId, grossPay } = req.params;
    const result = await calculatePayroll(employeeId, parseFloat(grossPay));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
