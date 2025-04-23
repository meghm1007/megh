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
import { TbWorld } from "react-icons/tb";
import { SiItchdotio } from "react-icons/si";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h2 className="text-2xl mb-4">previous projects/ventures</h2>
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <IoLogoJavascript className="text-2xl text-yellow-400 ml-2" />
        <BiLogoTypescript className="text-2xl text-blue-500 ml-2" />
        <FaPython className="text-2xl text-blue-600 ml-2" />
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
        <div className="p-3 border-l-2 border-gray-700">
          <div className="flex items-center mb-1">
            <span className="text-lg font-bold">abate fleet</span>
            <a
              href="https://abatefleet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="Visit website"
            >
              <TbWorld className="text-xl" />
            </a>
          </div>
          <p className="text-gray-300">
            worked at a 2 person startup building an entire fleet management
            system and developing an algorithm that lets truck company owners
            detect fuel theft made by their truck drivers. caught significant
            fuel theft (over $5k) at a company
          </p>
        </div>

        <div className="p-3 border-l-2 border-gray-700">
          <div className="flex items-center mb-1 flex-wrap">
            <span className="text-lg font-bold">mnm studios</span>
            <a
              href="https://www.instagram.com/mnm__studios/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="Instagram profile"
            >
              <FaInstagram className="text-xl text-pink-500" />
            </a>
            <a
              href="https://mnm-studios.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="itch.io page"
            >
              <SiItchdotio className="text-xl text-red-500" />
            </a>
          </div>
          <p className="text-gray-300">
            started building video games when i was 15 years old. i spent hours
            each day after school making these video games. managed to grew an
            instagram account to 1.5k followers, published 3+ mobile games (took
            them off now) and even a 20 level 3d fpp maze game on itch.io
          </p>
        </div>

        <div className="p-3 border-l-2 border-gray-700">
          <div className="flex items-center mb-1">
            <span className="text-lg font-bold">resume roast</span>
            <a
              href="https://github.com/meghm1007/resumeroast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="GitHub repository"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
          <p className="text-gray-300">
            it took me hours to build a resume, so i made an ai resume editor
            for myself letting me create resumes in 10 mins. i even added a
            feature that lets you host your resume on the site and others can
            roast it.
          </p>
        </div>

        <div className="p-3 border-l-2 border-gray-700">
          <div className="flex items-center mb-1">
            <span className="text-lg font-bold">moontrip ai</span>
            <a
              href="https://moontripai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="Visit website"
            >
              <TbWorld className="text-xl" />
            </a>
          </div>
          <p className="text-gray-300">
            an ai trip planner that lets you plan your next trip in 30 seconds.
            get hotel suggestions, daily plans etc.
          </p>
        </div>

        <div className="p-3 border-l-2 border-gray-700">
          <div className="flex items-center mb-1">
            <p className="text-lg font-bold">promptify</p>
            <a
              href="https://chromewebstore.google.com/detail/promptify-prompt-manager/cddmfedodmdgbnphdnemofcbmfemcfpe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-4"
              title="Chrome Web Store"
            >
              <FaChrome className="text-xl text-blue-400" />
            </a>
          </div>
          <p className="text-gray-300">
            a chrome extension that allows you to store prompts that could be
            easily pasted in your favourite llm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
