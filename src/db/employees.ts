//this will need to be our employees schema
//and out employee models
import mongoose from "mongoose";
import { idText } from "typescript";
import React from 'react';
const EmployeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    social: {type: String, required: false},
    marrigeStatus: {type: String, required: true},
    payType: {type: String, required: true},
    employeeId: {type: String, required: true},
    rate: {type: Number, required: true},
    status: {type: String, required: true}
})

//now we are turning this into a data model
export const EmployeeModel = mongoose.model('employees', EmployeeSchema);

//make actions that this will actually do
//this one fins all ee's within the model
export const getEmployees = () => EmployeeModel.find();
//this one gets them by employeeId
export const getEmployeesById = (employeeId : string) => EmployeeModel.findOne({ employeeId });
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