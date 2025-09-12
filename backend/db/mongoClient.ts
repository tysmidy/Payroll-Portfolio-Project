import { MongoClient, ObjectId } from "mongodb";

const MONGO_URL = "mongodb://192.168.0.162:27017"; //ne
const DB_NAME = "payStuff";

const client = new MongoClient(MONGO_URL);

async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to Mongo from WSL Node app");
  } catch (err) {
    console.error(" Failed to connect:", err);
  }
}

testConnection();
export interface Employee {
  maritalStatus: string;
  payType: string;
  grossPay: number;
}

export async function getEmployeeData(employeeId: string) {
  console.log("15")
  await client.connect();
  console.log("16")
  const db = client.db(DB_NAME);
  const collection = db.collection("employees");

  const employee = await collection.findOne({ _id: new ObjectId(employeeId) });

  if (!employee) throw new Error("Employee not found") ;
  console.log("17")
  return {
    maritalStatus: employee.maritalStatus,
    payType: employee.payType,
    grossPay: employee.grossPay
  };
}