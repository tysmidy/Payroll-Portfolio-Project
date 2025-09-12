import { MongoClient, ObjectId } from "mongodb";

// 🔹 Update these values to match your Mongo setup
const MONGO_URL = "mongodb://192.168.0.162:27017"; // or Windows host IP if using WSL
const DB_NAME = "payStuff"; 
const COLLECTION_NAME = "employees"; 

// Single client instance
const client = new MongoClient(MONGO_URL);

// Keep track if we already connected
let clientPromise: Promise<MongoClient> | null = null;
console.log("6")

async function getClient() {
  if (!clientPromise) {
    clientPromise = client.connect();
    console.log("7")
  }
  await clientPromise;
  console.log("8")
  return client;
}
export interface Employee {
  maritalStatus: string;
  payType: string;
  grossPay: number;
}

export async function getEmployeeData(employeeId: string) {
  try {
    const client = await getClient();
    console.log("9")
    const db = client.db(DB_NAME);
    console.log("10")
    const collection = db.collection(COLLECTION_NAME);
    console.log("11")

    const _id = new ObjectId(employeeId);
    console.log("12")
    const employee = await collection.findOne({ _id });
    console.log("13")

    if (!employee) throw new Error(`Employee with ID ${employeeId} not found`) ;

    return {
      maritalStatus: employee.maritalStatus,
      payType: employee.payType,
      grossPay: employee.grossPay,
    };
  } catch (err: any) {
    console.log("14")
    console.error("Error fetching employee:", err.message);
    throw err;
  }
}
