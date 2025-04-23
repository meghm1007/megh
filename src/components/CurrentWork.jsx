import React from "react";
import {
  FaExternalLinkAlt,
  FaReact,
  FaAws,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

const CurrentWork = () => {
  return (
    <div id="current-work" className="section">
      <h2 className="text-2xl mb-4">currently working on</h2>

      <div className="space-y-4">
        <div className="p-4 border-l-2 border-gray-700">
          <h3 className="text-xl font-bold mb-3">rosebud ai</h3>
          <p className="text-gray-600">
            working as an <span className="text-blue-600 font-medium">intern</span> at{" "}
            <a
              href="https://www.rosebud.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span className="highlight">rosebud ai.</span>

              <FaExternalLinkAlt className="h-2 w-2 ml-1 inline ml-2" />
            </a>
            , engineering the ai to make the best <span className="text-blue-600 font-medium">video games</span> possible. i'm even
            working on creating <span className="text-blue-600 font-medium">MCPs</span> and other side projects within the company
            that add immense value in the gaming industry.
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <h3 className="text-xl font-bold mb-3">meme marketing</h3>
          <p className="text-gray-600">
            i realised "<span className="text-blue-600 font-medium">memes make millions</span>" and am building a <span className="text-blue-600 font-medium">saas product</span> that
            helps brands/companies/startups make memes with ai. some key
            features of the product include:
          </p>
          <p className="text-gray-600 mt-3">
            ai memes, meme templates, <span className="text-blue-600 font-medium">trend analysis</span>, viral meme ad campaigns,
            short form content, song memes, roast competitos, simpson memes
            and so so so so much more more more more.
          </p>
          <p className="text-gray-600 mt-3">i'm even making such content at rosebud ai</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
