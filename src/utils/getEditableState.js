import { getformattedDay } from "./getformattedDay";
import { compareDates } from "./compareDates";

export const getEditableState = (day2) => {
  // day2 is a string {year}-${month}-${day}
  const toDay = getformattedDay(new Date());

  const resp = compareDates(toDay, day2);

  if (resp === "after") {
    return {
      addNew: false,
      doneBtn: false,
      deleteBtn: false,
      incompletBtn: false,
    };
  } else if (resp === "before") {
    return {
      addNew: true,
      doneBtn: false,
      deleteBtn: true,
      incompletBtn: false,
    };
  } else {
    return {
      addNew: true,
      doneBtn: true,
      deleteBtn: true,
      incompletBtn: true,
    };
  }
};
