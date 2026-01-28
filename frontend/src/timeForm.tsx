import React, { useState } from "react";
import DateRangeWithPortal from "./componets/dateRangePicker";


interface TimecardFormTypes {
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
  onSubmit: (
    employeeId: string,
    workWeek: [Date | null, Date | null],
    workDay: string,
    totalHours: number
  ) => void;
}

const TimeInterface: React.FC<TimecardFormTypes> = ({
  dateRange,
  setDateRange,
  onSubmit,
}) => {
  const [employeeId, setEmployeeId] = useState("");
  const [totalHours, setTotalHours] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dateRange[0] || !dateRange[1]) {
      alert("Please select a work week");
      return;
    }

    onSubmit(employeeId, dateRange, "Week", totalHours);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Work week</label>
        <DateRangeWithPortal
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>

      <div>
        <label>Employee ID</label>
        <input
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </div>

      <div>
        <label>Total hours</label>
        <input
          type="number"
          value={totalHours}
          onChange={(e) => setTotalHours(Number(e.target.value))}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default TimeInterface;
