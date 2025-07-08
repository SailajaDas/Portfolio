import React from "react";
import "./about.css";
import frontend from "../../assets/img1.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql2.jpg";
import Card from "../Card/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "top 20%",
      },
    });
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "top 20%",
      },
    });
    gsap.from(".rightabout ", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "top 20%",
      },
    });
  });
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span>:SAILAJA DAS
              </li>
              <li>
                <span>AGE</span>:21 YEARS
              </li>
              <li>
                <span>GENDER</span>:FEMALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span>:HINDI,ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>B.Tech</span>: Gandhi Institute for Education &
                Technology, Baniatangi, Bhubaneswar (2021–2025) |{" "}
                <strong>CGPA:</strong> 8.42
              </li>
              <li>
                <span>12th</span>: Shanti Institute of Management Higher
                Secondary School, Cuttack (2019–2021) |{" "}
                <strong>Percentage:</strong> 73%
              </li>
              <li>
                <span>10th</span>: Premchand Bidyapitha, Kendrapara (2018–2019)
                | <strong>Percentage:</strong> 68%
              </li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                <span>Frontend Development:</span> HTML5, CSS3, JavaScript
                (ES7), React.js, Bootstrap, Tailwind CSS
              </li>
              <li>
                <span>Backend Development:</span> Java
              </li>
              <li>
                <span>Database:</span> SQL
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="Frontend" image={frontend} />
        <Card title="Backend" image={java} />
        <Card title="Database" image={sql} />
      </div>
    </div>
  );
};

export default About;
