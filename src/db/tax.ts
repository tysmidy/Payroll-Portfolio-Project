import mongoose from "mongoose"
import 'employees' 
import {EmployeeModel} from "./employees";



export const getTaxdata = (marrigeStatus: string, payType:string, hours: number, rate: number) => EmployeeModel.find({
    marrigeStatus,
    payType,
    hours,
    rate
})


