import { send } from "process";
import { getEmployeeById, getEmployeesByStatus } from "../db/employees";
import { getTimecardsByDate } from "../db/timecard"
import { Date } from "mongoose";

//build helper on what time data to bring in, maybe do calculations? Unsure

//decalare types for helper function
export type TimeResult = {
    employeeId: string,
    status: string, 
    payType: string,
    workWeek: Date
    hours: {}
};

//function that does the heavy lifting of timecards
export async function timeData(
    employeeId: string, 
    status: string, 
    payType: string, 
    workWeek: Date,
    hours: {}
): Promise<TimeResult | any> {

    //declare const and build error logic
    if (!employeeId){
        console.log("Could not get ee ID in time helper");
    };
    
    //need to only grab data for active employees for that work week
    const grabTimeData = await getTimecardsByDate(workWeek);
    const activeTimeData = await getEmployeesByStatus("active");

    if (!grabTimeData || !activeTimeData){
        console.log("Could not grab data for time cards")
    }

    if(activeTimeData != "active"){
        return console.log("invalid data. Cannot grab time for inactive employees")
    }

    return {grabTimeData: "active", employeeId, status, payType, hours }
};