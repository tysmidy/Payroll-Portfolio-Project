import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangeWithPortalProps {
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
}

const DateRangeWithPortal: React.FC<DateRangeWithPortalProps> = ({
  dateRange,
  setDateRange,
}) => {
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) =>
        setDateRange(update as [Date | null, Date | null])
      }
      isClearable
      placeholderText="Select a work week"
    />
  );
};

export default DateRangeWithPortal;
