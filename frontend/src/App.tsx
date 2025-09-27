import ProcessPayroll from "./PayrollResults";
import PayrollResults from "./PayrollResults"
import PayrollCalculator from "./PayrollContainer";
import PayrollForm from "./PayrollForm";

export default function App() {
  function handleFormSubmit(formData: { employeeId: string; rate: number; hours: number; payType: string; marrigeStatus: string; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1>Refined Payroll</h1>
      <PayrollForm onSubmit={handleFormSubmit} loading={false}  />
      <PayrollResults grossPay={null} taxes={null} error={null} />
    </div>
  );
}
