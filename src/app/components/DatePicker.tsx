import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import "../../styles/components/DatePicker.css";

function DatePicker() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return (
    <DateRangePicker
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      inputFormat="YYYY/MM/DD"
    />
  );
}

export default DatePicker;
