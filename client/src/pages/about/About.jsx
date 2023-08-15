import React from "react";
import "./about.css";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
const About = () => {
  return (
    <div className="about-container">
      <Slide left cascade>
        <div className="about-content">
          <h2>About Us</h2>
          <p>Welcome to our blog! We are a passionate team of writers...</p>
          <p>
            Our mission is to provide valuable and engaging content to our
            readers. Whether you're a seasoned enthusiast or just getting
            started, our articles cover a wide range of topics to keep you
            informed and inspired.
          </p>
        </div>
      </Slide>

      <Bounce bottom>
        <div className="about-image">
          <img
            src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?w=1060&t=st=1692078300~exp=1692078900~hmac=d8f36eacfb177847ba051fb99636033bcea04dc67a0b77c63f6fbe395abc4a6a"
            alt="About Us"
          />
        </div>
      </Bounce>
    </div>
  );
};

export default About;
