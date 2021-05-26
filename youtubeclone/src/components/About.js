import React from "react";
import "./About.css";
import AnJu from "../assets/AnJu.png";
import Carina from "../assets/Carina.png";
import Jessica from "../assets/Jessica.jpg";

const About = () => {
  return (
    <div className="AboutContainer">
      <h1>About the Project</h1>
      <section className="AboutProject">
        <div className="ProjectPara">
          <p>
            This app is created using React, Javascript, the YouTube API, and
            CSS.
            <br />
            It is a user-friendly mock-up of the popular video streaming
            platform.
            <br />
            This application was created from the ground up by a team of diverse
            women.
          </p>
        </div>
      </section>

      <h1 className="AboutDevHdr">About the Developers</h1>
      <section className="AboutDevelopers">
        <div className="DevPara">
          <div className="ImageDiv">
            <img src={AnJu} alt="AnJu" />
          </div>
          <p>
            <h1>AnJu</h1>
            I am a software engineer and performing artist who works at the
            intersection of theatre arts, technology, and social equity. I am
            passionate about accessibility, advocacy, building community, and
            financial literacy. <br /> <br /> I desire to design products that
            help communities thrive, especially during times of need. My goal is
            to join a company that creates products or offers services that
            cater to the local or larger community.
          </p>
          <a
            href="https://github.com/AnJuHyppolite"
            target="_blank"
            rel="noreferrer noopener"
          >
            My Github
          </a>
        </div>

        <div className="DevPara">
          <div className="ImageDiv">
            <img src={Carina} alt="Carina" />
          </div>
          <p>
            <h1>Carina</h1>
            My name is Carina and I was born and raised in Queens. I am
            passionate about music, media, mental health and helping those who
            have a lack of representation.
            <br /> <br /> I want to use my skills to give back to my community
            and perhaps one day also help others better thier lives. I hope to
            be able to use my love of tech to be able to connect my different
            passions.
          </p>
          <a
            href="https://github.com/tCarina"
            target="_blank"
            rel="noreferrer noopener"
          >
            My Github
          </a>
        </div>

        <div className="DevPara">
          <div className="ImageDiv">
            <img src={Jessica} alt="Jessica" />
          </div>
          <p>
            <h1>Jessica</h1>I am a software engineer and biomedical researcher
            based in New York City. I have a background in neuroscience and I
            aspire to apply my interest in technologies like Artificial
            Intelligence and Augmented Reality to improve patient experience as
            well as increase accessibility in healthcare. As an avid user of
            health tech apps, I hope to continue to support the field as a
            creator.
          </p>
          <a
            href="https://github.com/jessicanetto"
            target="_blank"
            rel="noreferrer noopener"
          >
            My Github
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
