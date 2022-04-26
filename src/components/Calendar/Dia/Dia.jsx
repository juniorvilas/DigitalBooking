import { isPast, addDays } from "date-fns";
import React from 'react';
const Dia = ({
  date,
  isAvailable,
  checkInOutHandler,
  isBetween,
  isCheckin,
  isCheckout
}) => {
  return (
    <span
      className={`calendario__dia ${isBetween && "days-between"} 
      ${isCheckin && "checkin selected-day"}
      ${isCheckout && "checkout selected-day"}
      ${isPast(addDays(new Date(date), 1)) && "past-days"} 
      ${isAvailable && "reserved"} 
      ${!date && "blank-space"}`}
      onClick={() => checkInOutHandler(date)}
    >
      {date && date.getDate()}
    </span>
  );
};

export default Dia;
