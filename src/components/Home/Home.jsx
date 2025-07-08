import React from "react";
import "./home.css";
import man1 from "../../assets/man.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">SAILAJA DAS</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "BACKEND DEVELOPER", "REACT DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <a
            href="https://github.com/SailajaDas/Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Resume</button>
          </a>
        </div>
      </div>
      <div className="righthome">
        <img src={man1} alt="Illustration of Sailaja Das" />
      </div>
    </div>
  );
};

export default Home;
