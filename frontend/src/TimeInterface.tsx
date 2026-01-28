import React, { useState } from "react";
import TimeInterface from "./timeForm";

const TimecardPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const handleTimeFormSubmit = async (
    employeeId: string,
    workWeek: [Date | null, Date | null],
    workDay: string,
    totalHours: number
  ) => {
    console.log({
      employeeId,
      workWeek,
      workDay,
      totalHours,
    });
  };

  return (
    <div>
      <h2>Employee Timecard</h2>

      <TimeInterface
        dateRange={dateRange}
        setDateRange={setDateRange}
        onSubmit={handleTimeFormSubmit}
      />
    </div>
  );
};

export default TimecardPage;
