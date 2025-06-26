import React from "react";
import Card from "../Card/Card";
import "./project.css";
import va from "../../assets/va.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%",
      },
    });
     gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%",
      },
    });
    });
  return (
    <div id="projects">
      <h1 id="para">PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="VIRTUAL ASSISTANT" image={va} />
      </div>
    </div>
  );
};

export default Projects;
