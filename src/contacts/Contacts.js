import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts }) => {
  let kWord = "Contacts";
  if (!contacts) return <div>loading {kWord}</div>;
  return (
    <div className="container">
      <div
        className="row contactheading border-bottom text-float"
        key={[kWord, "title"].join("-")}
      >
        {kWord}
      </div>
      {contacts.map((contact, idx) => (
        <Contact idx={idx} contact={contact} key={[kWord, idx].join("-")} />
      ))}
    </div>
  );
};

export default Contacts;
