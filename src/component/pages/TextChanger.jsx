import React, { useEffect, useState } from "react";

const TextChanger = () => {
  const texts = ["Web Developer", "React Developer", "Frontend Developer"];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];
    let speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

      setCurrentText(updatedText);
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="text-2xl font-bold text-white-400 transition-all duration-700 ease-in-out">
      {currentText}
      <span className="animate-ping">_</span>
    </div>
  );
};

export default TextChanger;
