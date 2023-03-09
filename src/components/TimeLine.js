import React from "react";
import "./TimeLine.css";

export const TimeLine = () => {
  const events = [
    {
      date: "March 15, 10.00 am",
      title: "Introduction to Cyber Security",
      description:
        "Learn the basics of cyber security and how it affects individuals and businesses",
      image: "https://source.unsplash.com/random/600x600?cyber,security,hacking,hacker",
    },
    {
      date: "March 15, 11.00 am",
      title: "Cyber Threats and Vulnerabilities",
      description:
        "Discover the most common cyber threats and vulnerabilities and how to prevent them",
      image: "https://source.unsplash.com/random/600x600?cyber,security,hacking,hacker",
    },
    {
      date: "March 15, 12.00 am",
      title: "Data Privacy and Protection",
      description:
        "Explore data privacy and protection laws and regulations and how to comply with them",
      image: "https://source.unsplash.com/random/600x600?cyber,security,hacking,hacker",
    },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <img
              className="timeline-img"
              src={event.image}
              alt="cyber security image"
            />
            <div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
