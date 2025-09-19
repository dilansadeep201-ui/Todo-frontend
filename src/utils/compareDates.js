export const compareDates = (dateString1, dateString2) => {
  // Convert the date strings into Date objects.
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  // Compare the Date objects directly.
  if (date1 > date2) {
    return "after";
  } else if (date1 < date2) {
    return "before";
  } else {
    return "same day";
  }
};
