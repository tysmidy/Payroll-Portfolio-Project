import fedrate1 from "../models/fedrate1.json";

type Bracket = { min: number; max: number; rate: number };

type FedRateData = {
  single: { hourly: Bracket[]; salary: Bracket[] };
  married: { hourly: Bracket[]; salary: Bracket[] };
};

const rates = fedrate1 as FedRateData;
//import { TaxStrategy } from "./TaxStrategy";
//getting rid of bracker logic since we built it out in a data model
/* function getBracket(grossPay: number): string{
		if (grossPay > 0 && grossPay <= 10000) 
			return "fedRate1"; //10%
		else if (grossPay >= 10001 && grossPay <= 20000) 
			return "fedRate2"; // 20%
		//etc
		//etc
		else 
			return "fedRate5" //50%
	} */

  //got rid of a bunch the map, all in json

  //think we'll have to revise this very much
export class TaxStrategyFactory {
  static create(
    //going to input this?? grossPay: number,

    //delaring my types because ts sucks..
    maritalStatus: "single" | "married",
    payType: "hourly" | "salary" ) {
      const rateBrackets = fedrate1[maritalStatus][payType];
      if (!rateBrackets){
        throw new Error('no tax brackets for this data');
      }

      return {
      calculate: (grossPay: number) => {
        const bracket = rateBrackets.find(
          (b) => grossPay >= b.min && grossPay <= b.max
        );
        if (!bracket) {
          throw new Error(`No tax rate found for grossPay ${grossPay}`);
        }
        return grossPay * bracket.rate;
      },
    };
  }
}
 console.log("23")  /*  }
    TaxStrategy | null {
    const bracket = getBracket(grossPay);
    const key = `${bracket}_${maritalStatus}_${payType}`;
    const rate = fedRateMap[key];
    console.log("testing to see if we get here");
    return rate !== undefined ? new TaxStrategy(rate) : null;
  }
} */