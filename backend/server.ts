import express from "express";
import cors from "cors";
import payrollRoutes from "./routes/payrollRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ This must match what your frontend calls
app.use("/api/payroll", payrollRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
