import taxRates from "../db/taxRates.json"
import { calculateGrossPay} from './index';



type Bracket = { min: number; max: number; rate: number };

type FedRateData = {
  single: { hourly: Bracket[]; salary: Bracket[] };
  married: { hourly: Bracket[]; salary: Bracket[] };
};


const fedTaxRate = taxRates as unknown as FedRateData;
//dude, fix marriage status spelling


export async function fedTaxCalc(
  employeeId: string,
  marrigeStatus: string, // or 'marriageStatus' if you rename
  rate: number,
  payType: string,
  hours: number
): Promise<number> {
  //go get our gross pay for calculation
   const { grossPay } = await calculateGrossPay(employeeId, rate, hours);
   const normalizedMarital = marrigeStatus.toLowerCase() as "single" | "married";
   const normalizedPayType = payType.toLowerCase() as "hourly" | "salary";

   //enforce some type logic while im at it 
   const ratesBracket = (fedTaxRate as any)[normalizedMarital]?.[normalizedPayType] as Bracket[] | undefined;
   if (!ratesBracket) {
      throw new Error(
        `No tax brackets found for maritalStatus=${normalizedMarital}, payType=${normalizedPayType}`
      );
    }

    //go find a bracket for gross pay
    const bracket = ratesBracket.find(
        (b: Bracket) =>
            grossPay >= b.min && grossPay <= b.max
    );

    if (!bracket){
        throw new Error(
            `No tax brackets found for maritalStatus=${normalizedMarital}, payType=${normalizedPayType}`
        );
    }

    return grossPay * bracket.rate 
}
  
/* export const fedTaxCalc = async (employeeId: string, marrigeStatus: string, rate: number, payType: string, hours: number) =>
{
  const { grossPay } = await calculateGrossPay(employeeId, rate, hours);
    

    //const grossPay2 = taxGrossPay
    const normalizedMarital = marrigeStatus.toLowerCase() as "single" | "married";
    const normalizedPayType = payType.toLowerCase() as "hourly" | "salary";

    const ratesBracket = fedTaxRate[normalizedMarital]?.[normalizedPayType];

        if (!ratesBracket) {
      throw new Error(
        `No tax brackets found for maritalStatus=${normalizedMarital}, payType=${normalizedPayType}`
      );
    }

    //const grossPay = hours
    const bracket = ratesBracket.find(
        (b: Bracket) =>
            grossPay >= b.min && grossPay <= b.max
    );

    if (!bracket){
        throw new Error(
            `No tax brackets found for maritalStatus=${normalizedMarital}, payType=${normalizedPayType}`
        );
    }

    return grossPay * bracket.rate 
}
 */


/* var federalTaxRateCalculation = getTaxdata
export const fedTaxCalc = (marrigeStatus: string, rate: number, grossPay: number) => {
    var fedTaxRate = taxRates;
     
} */