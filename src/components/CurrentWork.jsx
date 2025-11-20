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
          <h3 className="text-xl font-bold mb-3">clover labs</h3>
          <p className="text-gray-600">
            starting{" "}
            <span className="text-blue-600 font-medium">winter 2026</span>, i'll
            be working at{" "}
            <a
              href="https://cloverlabs.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span className="highlight">clover labs</span>
              <FaExternalLinkAlt className="h-2 w-2 ml-1 inline ml-2" />
            </a>
            , building{" "}
            <span className="text-blue-600 font-medium">ai agents</span> that
            solve distribution. their portfolio includes autonomous growth
            engines like{" "}
            <span className="text-blue-600 font-medium">1Price</span> - a
            dynamic pricing agent that drives revenue on autopilot.
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <h3 className="text-xl font-bold mb-3">crypto calls tracker</h3>
          <p className="text-gray-600">
            built a{" "}
            <a
              href="https://crypto-calls-saas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span className="highlight">crypto trading saas</span>
              <FaExternalLinkAlt className="h-2 w-2 ml-1 inline ml-2" />
            </a>{" "}
            that tracks the{" "}
            <span className="text-blue-600 font-medium">
              best communities making crypto predictions
            </span>
            . helps traders identify top-performing crypto communities and their
            prediction accuracy in the{" "}
            <span className="text-blue-600 font-medium">trading space</span>.
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <h3 className="text-xl font-bold mb-3">meme marketing</h3>
          <p className="text-gray-600">
            i realised "
            <span className="text-blue-600 font-medium">
              memes make millions
            </span>
            " and am building a{" "}
            <span className="text-blue-600 font-medium">saas</span> that helps
            brands/companies/startups make memes with ai. some key features of
            the product include:
          </p>
          <p className="text-gray-600 mt-3">
            <span
              className="text-blue-600 font-medium"
              style={{ fontFamily: "monospace", fontStyle: "italic" }}
            >
              ai memes, meme templates, trend analysis, viral meme ad campaigns,
              short form content, song memes, roast competitos, simpson memes
              and so so so so much more more more more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
