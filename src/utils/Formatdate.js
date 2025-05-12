const formatedDate = (date) => {
  const datee = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
  return datee;
};

export default formatedDate;
