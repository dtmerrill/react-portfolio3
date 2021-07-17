import React from "react";
import Cocktails from "../../assets/images/Cocktails.jpg";
import Tah from "../../assets/images/Tah.jpg";
import JSQuiz from "../../assets/images/JSQuiz.jpg";
import Pw from "../../assets/images/Pw.jpg";
import Wdash from "../../assets/images/Wdash.png";

function Portfolio() {
  const projects = [
    {
      name: "Pick Your Poison",
      image: Cocktails,
      tools: "React, MongoDB, Express, Node.js",
      link: "https://pick-your-poison-2-p3.herokuapp.com/",
      GitHub: "https://github.com/dtmerrill/pick-your-poison-2.0-p3",
    },
    {
      name: "Tabletop Auction House",
      image: Tah,
      tools: "HTML, CSS, JavaScript, MySQL",
      link: "https://tabletop-auction-house.herokuapp.com/",
      GitHub: "https://github.com/lordgeer/Tabletop_Auction_House",
    },
    {
      name: "How Well Do You Know JavaScript?",
      image: JSQuiz,
      tools: "HTML, CSS, JavaScript",
      link: "https://dtmerrill.github.io/CodeQuiz/",
      GitHub: "https://github.com/dtmerrill/CodeQuiz"
    },
    {
      name: "Weather Dash!",
      image: Wdash,
      tools: "JavaScript",
      link: "https://dtmerrill.github.io/weather-dashboard/",
      GitHub: "https://github.com/dtmerrill/weather-dashboard"
    },
    {
      name: "Quick and Easy Password Generator",
      image: Pw,
      tools: "JavaScript",
      link: "https://dtmerrill.github.io/HW3-DTM-Password_Generator/",
      GitHub: "https://github.com/dtmerrill/HW3-DTM-Password_Generator"
    },
  ];
  return (
    <section className="card-container">
      <h2 className="port">Portfolio</h2>

      {projects.map((projects, index) => (
        <div className="card" key={projects.name}>
          <img className="card-img" src={projects.image} alt="" />
          <div className="card-body">
            <a
              className={`project ${projects}`}
              href={projects.link}
              key={index}
            >
              <h3>{projects.name}</h3>
              <p>{projects.tools}</p>
            </a>
            <div className="card-about">
              <a
                className={`project ${projects}`}
                href={projects.GitHub}
                key={index}
              >
                <p>{projects.GitHub}</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;