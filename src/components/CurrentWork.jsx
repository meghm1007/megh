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

      <div className="space-y-6">
        <div className="p-4">
          <h3 className="text-xl mb-3">rosebud ai</h3>
          <p>
            working as an intern at{" "}
            <a
              href="https://www.rosebud.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span className="highlight">rosebud ai.</span>

              <FaExternalLinkAlt className="h-2 w-2 ml-1 inline ml-2" />
            </a>
            , engineering the ai to make the best video games possible. i'm even
            working on creating MCPs and other side projects within the company
            that add immense value in the gaming industry.
          </p>
        </div>

        <div className="p-4">
          <h3 className="text-xl mb-3">meme marketing</h3>
          <p>
            i realised "memes make millions" and am building a saas product that
            helps brands/companies/startups make memes with ai. some key
            features of the product include:
            <br />
            <br />
            <span className="text-brown-500">
              ai memes, meme templates, trend analysis, viral meme ad campaigns,
              short form content, song memes, roast competitos, simpson memes
              and so so so so much more more more more.
            </span>
          </p>
          <p>i'm even making such content at rosebud ai</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
