export const formatDate = (startDate, endDate) => {
  if (startDate instanceof Date && endDate instanceof Date) {
    const startMonth = new Intl.DateTimeFormat("en", { month: "short" }).format(
      startDate
    );
    const endMonth = new Intl.DateTimeFormat("en", { month: "short" }).format(
      endDate
    );
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    const formattedDateRange = `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    return formattedDateRange;
  }
  return "";
};
