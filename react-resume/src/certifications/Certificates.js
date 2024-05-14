import React, { Fragment } from "react";

const Certificates = () => {
  const baseURL = "./images/";
  const width = "50px";
  const certs = [
    {
      name: "AWS Certified Cloud Practioner",
      image: "aws-certified-cloud-practitioner.png",
      url: "https://www.credly.com/badges/f1e048c1-6f50-4580-93f7-6481e7841e76/public_url",
    },
    {
      name: "AWS Certified Solution Architect Associate",
      image: "aws-certified-solutions-architect-associate.png",
      url: "https://www.credly.com/badges/25f33548-35b0-4f26-a743-c1134c433aa5/public_url",
    },
    {
      name: "ICAgile Delivery At Scale",
      image: "delivery-at-scale.png",
      url: "https://www.credly.com/badges/8ecd210f-67ba-457c-853b-a490c28a5210/public_url",
    },
    {
      name: "Professional Scrum Master PSM I",
      image: "professional-scrum-master-i-psm-i.png",
      url: "https://www.credly.com/badges/0fe7a6cd-f423-45e1-9d4b-fe01d6194aa7/public_url",
    },
  ];

  return (
    <Fragment>
      {certs.map((cert, idx) => {
        const { name, image, url } = cert;
        return (
          <a
            href={`${url}`}
            key={`cert-href-${idx}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${baseURL}${image}`}
              width={`${width}`}
              alt={`${name}`}
              key={`cert-img-${idx}`}
            />
          </a>
        );
      })}
    </Fragment>
  );
};

export default Certificates;
