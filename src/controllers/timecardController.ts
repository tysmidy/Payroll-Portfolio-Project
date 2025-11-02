import { timeData } from "../helpers/timecardHelper";
import { getEmployeeById, getEmployeesByStatus } from "../db/employees";
import express from 'express';
import { isExpression } from "typescript";

//declare controller, request, response
export const TimeCardData = async (req: express.Request, res: express.Response ) => {
    try {
        /*declare the body needed for data needed for payroll
        we may need to create a different const or differnt file to deal with the time interface
        as this will only meet the minimal requirments for processing payroll                  */
        const {employeeId, status, totalHours, payType, workWeek} = req.body;

                //error out if we dont get everything needed to process the request
        if (!req.body){
            console.log("Could not gather all needed data for timecard data controller");
            return res.status(400).json;
        };

        const timecard = await timeData( employeeId, status, payType, workWeek, totalHours );

        if (!timecard){
            console.log("timeData could not return needed data in controller");
            return res.status(400).json;
        };

        return res.json({
            employeeId: timecard.employeeId,
            status: timecard.status,
            payType: timecard.payType,
            workWeek: timecard.workWeek,
            totalHours: timecard.totalHours
        });

    } catch (error) {
        console.log(error);
        return error;
    };


};
