export function ExpirationDateValidator(month, year) {
  // get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  // parse the month and year values to integers
  const inputMonth = parseInt(month, 10);
  const inputYear = parseInt(year, 10);
  // compare the input month and year with the current and next month and year
  if (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  ) {
    return false; // input is before current date
  } else if (inputMonth > 12 || inputMonth < 1) {
    return false; // invalid month
  } else if (
    inputYear > currentYear + 10 ||
    (inputYear === currentYear + 10 && inputMonth > currentMonth)
  ) {
    return false; // input is more than 10 years in the future
  }
  return true;
}
