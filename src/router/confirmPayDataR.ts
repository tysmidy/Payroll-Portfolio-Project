import { Router } from "express";

export default (router: Router) => {
  router.post("/confR/grossPayData", (req, res) => {
    const { employeeId, hours, rate } = req.body;

    if (!employeeId || !hours || !rate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const grossPay = hours * rate;

    res.json({
      employeeId,
      grossPay,
      status1: "Processed",
    });
  });
};
