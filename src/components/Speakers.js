import React, { Fragment } from "react";
import "./Speakers.css";
import profile from "./profile.jpg";

export const Speakers = () => {
  const speaker = [
    {
      name: "ABC",
      position: "Founder",
      image: profile,
    },
    {
      name: "Falna",
      position: "Founder",
      image: profile,
    },
    {
      name: "Pata nahi kon hai",
      position: "Founder",
      image: profile,
    },
    {
      name: "Jo bhi ho",
      position: "Founder",
      image: profile,
    },
  ];
  return (
    <Fragment>
      <h2 className="bg-secondary fw-bolder text-primary text-center w-h-auto bg-opacity-25 m-auto p-2">
        SPEAKERS
      </h2>
      <div className="speaker-card">
        {speaker.map((item, i) => (
          <div key={i} className="card">
            <img alt={item.name} src={item.image} className="card__img" />
            <div className="card__content">
              <h3 className="card__name">{item.name}</h3>
              <h4 className="card__position">{item.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
