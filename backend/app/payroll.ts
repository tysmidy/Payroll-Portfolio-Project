//this will need to be built out for other taxes I think, and maybe deductions, etc?
import { getEmployeeData } from "../db/employee";
import { TaxStrategyFactory } from "../strategies/TaxStrategyFactory";

export async function calculatePayroll(employeeId: string) {
  // Fetch data from DB
  console.log("1")
  const { maritalStatus, payType, grossPay } = await getEmployeeData(employeeId);
  console.log("2")

  //changing this since we got rid of the bracket logic
  const strategy = TaxStrategyFactory.create(maritalStatus, payType);
console.log("3")

  if (!strategy) throw new Error("No matching tax strategy found.");
console.log("4")
  // Calculate tax
  const tax = strategy.calculate(grossPay);
  console.log("5")
  return { grossPay, maritalStatus, payType, tax };
}