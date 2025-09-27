//this will need to be our employees schema
//and out employee models
import mongoose, { Document, Model } from "mongoose";

// Step 1: Plain TypeScript interface for fields
export interface Employee {
  name: string;
  position: string;
  social?: string;
  marrigeStatus: string;
  payType: string;
  employeeId: string;
  rate: number;
  status: string;
  hours?: number; // optional if some docs don't have it
}

// Step 2: Extend Document (what Mongoose actually returns)
export interface EmployeeDocument extends Employee, Document {}

// Step 3: Define Schema without over-generic typing
const EmployeeSchema = new mongoose.Schema<EmployeeDocument>({
  name: { type: String, required: true },
  position: { type: String, required: true },
  social: { type: String },
  marrigeStatus: { type: String, required: true },
  payType: { type: String, required: true },
  employeeId: { type: String, required: true },
  rate: { type: Number, required: true },
  status: { type: String, required: true },
  hours: { type: Number, required: false }, // include since you had it in your DB screenshot
});

// Step 4: Correct model typing
export const EmployeeModel: Model<EmployeeDocument> =
  mongoose.models.Employee || mongoose.model<EmployeeDocument>("employees", EmployeeSchema);

// Step 5: Helper query
export const getEmployeeById = async (
  employeeId: string
): Promise<EmployeeDocument | any> => {
  return EmployeeModel.findOne({ employeeId }).exec();
};


//make actions that this will actually do
//this one fins all ee's within the model
export const getEmployees = () => EmployeeModel.find();
//this one gets them by employeeId
//export const getEmployeesById = (employeeId : string) => EmployeeModel.findOne({ employeeId });
//grab ee id and rate

export const getEmployeesByIdAndRate = (employeeId : string, rate: number) => EmployeeModel.find({ 
    employeeId,
    rate
});
//get them by status
export const getEmployeesByStatus = (status: string) => EmployeeModel.findOne({ 
    'Active': status
});
//find by db id
export const getEmployeesByDbId = (id: string) => EmployeeModel.findById(id);

//now, we'll go ahead and build out the create logic
export const createEmployee = (values: Record<string, any>) => new EmployeeModel(values)
.save().then((employee) => employee.toObject());
//delete an employee
export const deleteEmployeeByDbId = (id: string) => EmployeeModel.findOneAndDelete({ _id: id});
//Update the user by DB ID
export const updateEmployeeByDbId = (id: string, values: Record<string, any>) => EmployeeModel.findByIdAndUpdate({ _id: id});