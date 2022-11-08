import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Quote } from "./quote";
import { CalendarHeader, CalendarFooter  } from "./calendar-background";
import "./calendar.css";


export function MyCalendar() {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
    const quote = new Quote();
  });

  return (
    <div className="calendar-container">
      <CalendarHeader></CalendarHeader>
      <Calendar onChange={onChange} value={value} />
      <CalendarFooter></CalendarFooter>

    </div>
  );
}
