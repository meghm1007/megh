import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaChrome,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiUnity } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiItchdotio } from "react-icons/si";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h2 className="text-2xl mb-4">previous projects/ventures</h2>
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <IoLogoJavascript className="text-2xl text-yellow-400 ml-2" />
        <BiLogoTypescript className="text-2xl text-blue-500 ml-2" />
        <FaPython className="text-2xl ml-2" />
        <TbBrandCSharp className="text-2xl text-purple-600 ml-2" />
        <RiNextjsFill className="text-2xl ml-2" />
        <FaReact className="text-2xl text-blue-400 ml-2" />
        <SiVite className="text-2xl text-purple-500 ml-2" />
        <TbBrandThreejs className="text-2xl ml-2" />
        <SiUnity className="text-2xl ml-2" />
        <FaAws className="text-2xl text-orange-500 ml-2" />
        <BiLogoPostgresql className="text-2xl text-blue-700 ml-2" />
      </div>
      <div className="space-y-4">
        <div className="p-4 border-l-2 border-gray-700">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold">abate fleet</h3>
            <div className="ml-2 flex items-center self-center" style={{ marginLeft: '0.5rem' }}>
              <a
                href="https://abatefleet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="Visit website"
                style={{ marginRight: '8px' }}
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            worked at a 2 person startup building an entire{" "}
            <span className="text-blue-600 font-medium">
              fleet management system
            </span>{" "}
            and developing an{" "}
            <span className="text-blue-600 font-medium">algorithm</span> that
            lets truck company owners detect{" "}
            <span className="text-blue-600 font-medium">fuel theft</span> made
            by their truck drivers. caught significant fuel theft (over $5k) at
            a company
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <div className="flex items-center mb-3 flex-wrap">
            <h3 className="text-xl font-bold">mnm studios</h3>
            <div className="ml-2 flex items-center self-center" style={{ marginLeft: '0.5rem' }}>
              <a
                href="https://www.instagram.com/mnm__studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="Instagram profile"
                style={{ marginRight: '8px' }}
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://mnm-studios.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="itch.io page"
                style={{ marginRight: '8px' }}
              >
                <SiItchdotio className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            started building{" "}
            <span className="text-blue-600 font-medium">video games</span> when
            i was 15 years old. i spent hours each day after school making these
            video games. managed to grew an instagram account to{" "}
            <span className="text-blue-600 font-medium">1.5k followers</span>,
            published 3+ mobile games (took them off now) and even a 20 level{" "}
            <span className="text-blue-600 font-medium">3d fpp maze game</span>{" "}
            on itch.io
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold">resume roast</h3>
            <div className="ml-2 flex items-center self-center" style={{ marginLeft: '0.5rem' }}>
              <a
                href="https://github.com/meghm1007/resumeroast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="GitHub repository"
                style={{ marginRight: '8px' }}
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            it took me hours to build a resume, so i made an{" "}
            <span className="text-blue-600 font-medium">ai resume editor</span>
            for myself letting me create resumes in{" "}
            <span className="text-blue-600 font-medium">10 mins</span>. i even
            added a feature that lets you host your resume on the site and
            others can roast it.
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold">moontrip ai</h3>
            <div className="ml-2 flex items-center self-center" style={{ marginLeft: '0.5rem' }}>
              <a
                href="https://moontripai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="Visit website"
                style={{ marginRight: '8px' }}
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            an{" "}
            <span className="text-blue-600 font-medium">ai trip planner</span>{" "}
            that lets you plan your next trip in{" "}
            <span className="text-blue-600 font-medium">30 seconds</span>. get
            hotel suggestions, daily plans etc.
          </p>
        </div>

        <div className="p-4 border-l-2 border-gray-700">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold">promptify</h3>
            <div className="ml-2 flex items-center self-center" style={{ marginLeft: '0.5rem' }}>
              <a
                href="https://chromewebstore.google.com/detail/promptify-prompt-manager/cddmfedodmdgbnphdnemofcbmfemcfpe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
                title="Chrome Web Store"
                style={{ marginRight: '8px' }}
              >
                <FaChrome className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            a{" "}
            <span className="text-blue-600 font-medium">chrome extension</span>{" "}
            that allows you to store prompts that could be easily pasted in your
            favourite llm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
