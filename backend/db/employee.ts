import { client } from "./mongoClient"; // use my actual server or client I think?

export async function getEmployeeData(employeeId: string) {
  const db = client.db("payrollDB");
  const collection = db.collection("employees");

  const employee = await collection.findOne({ EEid: employeeId });
  if (!employee) throw new Error("Employee not found");

  return {
    maritalStatus: employee.maritalStatus.toLowerCase(),
    payType: employee.payType.toLowerCase(),
  };
} 
