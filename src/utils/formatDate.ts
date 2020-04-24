const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat().format(new Date(date));

export default formatDate;
