//will need to build this more when I build out hours
import React from 'react';
import { grossPayData } from '../controllers/payrollConfrimation';
export const grossData = (employeeId: string, rate: number, hours:number) =>  {

    const grossPay = rate *hours;
    return grossPay
}
export default grossPayData;