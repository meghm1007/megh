import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Writings = () => {
  return (
    <div id="course-work" className="section">
      <h2 className="text-2xl mb-4">course work</h2>
      <div className="space-y-4">
        <p>i am a computer science major at McMaster University🎓</p>
        <p>
          these are a few relevant courses i've taken: intro to programming,
          data structures and algorithms, computer architecture, discrete math,
          linear algebra, database systems, design thinking, concurrent systems,
          and more!
        </p>
        {/* <br /> */}
        <p>
          these are a few hackathon/ university projects i built
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a 
            href="https://github.com/meghm1007/Rotten-World" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight flex items-center"
          >
            Rotten World <FaGithub className="ml-1"/>
          </a>
          <span className="mx-2"></span>
          <a 
            href="https://macmatch.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="highlight flex items-center"
          >
            Mac Match <FaLink className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Writings;
