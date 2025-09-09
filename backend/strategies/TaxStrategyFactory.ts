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
//map all combos to a tax rate
const fedRateMap = {
		"fedRate1": .10,
		"fedRate2": .20,
        "fedRate5": .50
		//etc etc
        //not real rates, finish building out
};

export class TaxStrategyFactory {
  static getStrategy(
    grossPay: number,
    maritalStatus: string,
    payType: string
  ): TaxStrategy | null {
    const bracket = getBracket(grossPay);
    const key = `${bracket}_${maritalStatus}_${payType}`;
    const rate = fedRateMap[key];
    return rate !== undefined ? new TaxStrategy(rate) : null;
  }
}