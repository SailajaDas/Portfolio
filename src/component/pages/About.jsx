import React from "react";
// import { FaJava } from "react-icons/fa";

const personalInfo = [
  { label: "Name", value: "SIBASUNDAR KAR" },
  { label: "DOB", value: "2ND DEC 2004" },
  { label: "Gender", value: "MALE" },
  { label: "Language Known", value: "HINDI, ENGLISH, ODIA" },
];

const education = [
  { label: "Degree", value: "BTECH" },
  { label: "College", value: "GANDHI INSTITUTE FOR EDUCATION AND TECHNOLOGY, KHORDHA" },
  { label: "Branch", value: "ELECTRICAL AND COMPUTER SCIENCE" },
  { label: "CGPA", value: "8.0" },
  { label: "12th", value: "SCIENCE" },
  { label: "School", value: "BHADRAK HIGHER SECONDARY SCHOOL, BHADRAK" },
  { label: "Percentage", value: "83%" },
];

const skillList = [
  "JAVA SE (OOP, Collections, Exception Handling)",
  "JAVA EE (Servlets, JSP, JDBC)",
  "SPRING BOOT",
  "HTML, CSS, JavaScript, React",
];

const skillCards = [
  {
    label: "Java",
    // icon: <FaJava size={40} className="mr-2 text-red-500" />,
    style: "text-red-500 animate-pulse",
  },
  {
    label: "SPRING BOOT",
    style: "text-cyan-400 hover:scale-105 transition",
  },
  {
    label: "HTML, CSS, JS, REACT",
    style: "text-cyan-300 hover:scale-105 transition",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* Personal Info */}
          <div>
            <h2 className="text-pink-400 text-2xl font-bold mb-3">Personal Info</h2>
            {personalInfo.map((item, index) => (
              <p key={index}>
                <span className="font-semibold text-cyan-400">{item.label}:</span> {item.value}
              </p>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-pink-400 text-2xl font-bold mb-3">Education</h2>
            {education.map((item, index) => (
              <p key={index}>
                <span className="font-semibold text-cyan-400">{item.label}:</span> {item.value}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-pink-400 text-2xl font-bold mb-3">Skills</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-300">
              {skillList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-6">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={`w-72 h-36 bg-slate-800 rounded-lg shadow-md flex items-center justify-center text-2xl font-bold border border-cyan-400 ${card.style}`}
            >
              {card.icon} {card.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
