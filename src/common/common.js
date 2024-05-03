export const checkContactType = (contactType, name, details) => {
  if (contactType.toLowerCase() === "email") {
    return <a href={`mailto:${details}`}>{details}</a>;
  }
  if (contactType.toLowerCase() === "link") {
    return (
      <a href={`http://${details}`} target="_blank" rel="noreferrer">
        {name}
      </a>
    );
  }
  if (contactType.toLowerCase() === "phone") {
    return (
      <a href={`tel:${details}`} target="_blank" rel="noreferrer">
        {details}
      </a>
    );
  }
};

export const formatDate = (date) => {
  let theDate = new Date(date);
  let theMonth = theDate.toLocaleString("default", { month: "long" });
  let theYear = theDate.toLocaleString("default", { year: "2-digit" });
  return theMonth.substring(0, 3) + "-" + theYear;
};
