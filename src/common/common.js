const checkContactType = (contactType, name, details) => {
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

export default checkContactType;
