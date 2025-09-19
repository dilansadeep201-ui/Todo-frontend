export const calChangeDay = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
