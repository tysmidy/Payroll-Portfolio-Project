import React, { useState } from "react";
import TimeInterface from "./timeForm";

const TimecardPage: React.FC = () => {
  const [timecard, setTimecard] = useState<any>(null);

  const handleTimeFormSubmit = async (
    employeeId: string,
    workWeek: string,
    workDay: string,
    totalHours: number
  ) => {
    try {
      const response = await fetch("http://localhost:5000/timecard/timedata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeId, workWeek, workDay, totalHours }),
      });

      if (!response.ok) throw new Error("Failed to submit timecard");

      const data = await response.json();
      setTimecard(data);
      console.log("Timecard submitted successfully");
    } catch (error) {
      console.error("Error submitting timecard", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Employee Timecard</h2>
      <TimeInterface onSubmit={handleTimeFormSubmit} />
      {timecard && (
        <pre className="mt-4 bg-gray-100 p-3 rounded text-sm">
          {JSON.stringify(timecard, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default TimecardPage;
