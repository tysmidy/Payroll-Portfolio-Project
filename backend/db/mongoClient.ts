import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

export { client };