import React from "react";
import Dtm from "../../assets/images/DTMthinking.jpg";

function About() {
  return (
    <section className="container">
      <h3 className="about-title">Dana Merrill - Frankensteinian Development</h3>
      <div className="about-me">
        <div className="about-image-container">
          <img src={Dtm} alt="Dana Merrill" className="Dtm" />
        </div>
        <div className="about-text">
          <p>
          An artist using the best tools and materials can make magic. Often, however, only faulty tools are at hand and all the materials must be scrounged. Original thoughts of 'perfection' fly away and the need for something that works becomes the only goal. Dana has found himself in the lab many times driving toward life in his coding, project and program experiments and found it. Thankfully, not once (yet) has his creation destroyed him.
<br></br>
<br></br>
            Recently graduated from the UNC - Chapel Hill/Trinity Full Stack Coding
            Boot Camp and with a background in Project and Program management, Dana is well-versed in HTML, CSS, JavaScript, and React to
            build applications from concept through delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;