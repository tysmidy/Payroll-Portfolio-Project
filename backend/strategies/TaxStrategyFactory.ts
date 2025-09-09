import  "./models/fedrate1.json";
import { TaxStrategy } from "./TaxStrategy";

function getBracket(grossPay: number): string{
		if (grossPay > 0 && grossPay <= 10000) 
			return "fedRate1"; //10%
		else if (grossPay >= 10001 && grossPay <= 20000) 
			return "fedRate2"; // 20%
		//etc
		//etc
		else 
			return "fedRate5" //50%
	}

  //got rid of a bunch of the map, all in json
  const fedRateMap = require("./models/fedrate1.json");;

  //think we'll have to revise this very much
export class TaxStrategyFactory {
  static getStrategy(
    //examples for import - will most likelyu have to map it like taxes, 
    grossPay: number = 2200,
    maritalStatus: string = "Married",
    payType: string = "Salary"
  ): TaxStrategy | null {
    const bracket = getBracket(grossPay);
    //example before it's built out
    const key = `${bracket}_${maritalStatus}_${payType}`;
    const rate = fedRateMap[key]
    console.log(rate);
    return rate !== undefined ? new TaxStrategy(rate) : null;
  }
}