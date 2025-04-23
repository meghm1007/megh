import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Writings = () => {
  return (
    <div id="course-work" className="section">
      <h2 className="text-2xl mb-4">course work</h2>
      <div className="space-y-4">
        <div className="p-4 border-l-2 border-gray-700">
          <p className="text-gray-600">
            i am a computer science major at McMaster University🎓
          </p>
          <p className="text-gray-600 mt-3">
            these are a few relevant courses i've taken: intro to programming, ,
            computer architecture, discrete math, linear algebra, database
            systems, design thinking, concurrent systems, and more!
          </p>
          <p className="text-gray-600 mt-3">
            these are a few hackathon/ university projects i built
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href="https://github.com/meghm1007/Rotten-World"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight flex items-center"
            >
              Rotten World <FaGithub className="ml-1" />
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
    </div>
  );
};

export default Writings;
