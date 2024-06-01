import React from "react";
import "./About.css";
import me from "../../image/IMG_20230826_151417_333.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { HiFolderOpen } from "react-icons/hi";
import { Element, Link } from "react-scroll";
const About = () => {
  
  return (
    <Element name="About">
      <section className="About">
        {/* <h5>Get To Know</h5> */}
        <h2>About Me</h2>
        <div className="container about_container">
          <div
            className="about_me"
          >
            <div className="about_me-image">
              <img src={me} alt="saeed" />
            </div>
          </div>
          <div
            className="about_content"
          >
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>+3 Years Working</small>
              </article>
              <article className="about_card">
                <HiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>+5 worldwide</small>
              </article>
              <article className="about_card">
                <HiFolderOpen className="about_icon" />
                <h5>Projects</h5>
                <small>+10 Completed</small>
              </article>
            </div>
            <p>
              I'm a skilled Frontend Developer specializing in React and
              Next.js, with over 3 years of experience in frontend development,
              state management, and performance optimization. I thrive on
              collaboration and am committed to continuous learning. Whether
              tackling large projects or innovative prototypes, I bring
              unwavering dedication and enthusiasm to each endeavor
            </p>
            {/* <p>My Hobby is
            Photography and I aspire to be the best in everything.</p> */}
            <Link to="Contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
