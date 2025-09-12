export class TaxStrategy {
  constructor(private rate: number) {}

  calculate(grossPay: number): number {
    return grossPay * this.rate;
  }
  
}
console.log("22")