import express from "express";
import payrollRoutes from "./routes/payrollRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/app/payroll", payrollRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});