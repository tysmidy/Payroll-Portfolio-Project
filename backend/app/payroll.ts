//this will need to be built out for other taxes I think, and maybe deductions, etc?
import { getEmployeeData } from "../db/employee";
import { TaxStrategyFactory } from "../strategies/TaxStrategyFactory";

export async function calculatePayroll(employeeId: string, grossPay: number) {
  // Fetch data from DB
  const { maritalStatus, payType } = await getEmployeeData(employeeId);

  // Pick strategy
  const strategy = TaxStrategyFactory.getStrategy(grossPay, maritalStatus, payType);

  if (!strategy) throw new Error("No matching tax strategy found.");

  // Calculate tax
  const tax = strategy.calculate(grossPay);
  return { grossPay, maritalStatus, payType, tax };
}