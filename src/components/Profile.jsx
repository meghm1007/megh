import React, { useState, useEffect } from "react";
// Adding required icons
import { SiX, SiFarcaster } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  const [imageError, setImageError] = useState(false);
  const [age, setAge] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Generate a random subtle background tint
    const generateRandomTint = () => {
      // Generate very light pastel colors
      const hue = Math.floor(Math.random() * 360); // Random hue (0-359)
      const saturation = Math.floor(Math.random() * 15) + 5; // Low saturation (5-20%)
      const lightness = Math.floor(Math.random() * 5) + 90; // Very high lightness (94-99%)

      // Apply the background color to body
      document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Apply the random tint on component mount (page load)
    generateRandomTint();

    // Calculate and update age in real-time
    const calculateAge = () => {
      const birthdate = new Date("2005-07-10T00:00:00");
      const now = new Date();
      const ageInYears = (now - birthdate) / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 50); // Update every 50ms for smooth display

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const handleImageInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="flex flex-col items-center mb-12">
      <div
        className={`w-50 h-50 rounded-full overflow-hidden mb-6 flex items-center justify-center profile-image-container ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleImageInteraction}
      >
        {!imageError ? (
          <img
            src={isFlipped ? "/profile2.png" : "/profile.png"}
            alt="Profile"
            className="w-full h-full object-scale-down"
            onError={() => setImageError(true)}
            onMouseEnter={() => !isMobile && setIsFlipped(true)}
            onMouseLeave={() => !isMobile && setIsFlipped(false)}
          />
        ) : (
          <span className="text-gray-400 text-4xl">👤</span>
        )}
      </div>

      <div className="w-full text-left">
        <h1 className="text-4xl mb-2 text-center">hi i'm megh.</h1>

        <div className="age-counter text-center text-sm mb-3">
          time on earth: {age.toFixed(10)} years
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-primary"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-600 hover:text-primary"
          >
            <SiX size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-primary"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://farcaster.xyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Farcaster"
            className="text-gray-600 hover:text-primary"
          >
            <SiFarcaster size={24} />
          </a>
          <a 
            href="mailto:example@example.com" 
            aria-label="Email"
            className="text-gray-600 hover:text-primary"
          >
            <MdEmail size={24} />
          </a>
        </div>

        <p className="text-xl mb-4 text-center">
          i'm just a guy who loves<span className="highlight">&nbsp;building stuff</span>
        </p>

        {/* <div className="visitor-counter text-center mb-4">
          you are the 507th visitor, welcome!
        </div> */}

        <div className="nav-links nav-links-enhanced">
          <a href="#current-work" className="nav-link">
            current
          </a>
          <a href="#projects" className="nav-link">
            projects
          </a>
          <a href="#interests" className="nav-link">
            interests
          </a>
          <a href="#course-work" className="nav-link">
            course work
          </a>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </div>

        <div className="p-4 mt-6">
          <p className="text-gray-600">
            currently based in hamilton, ON🍁, i spend my days building <span className="text-blue-600 font-medium">SaaS
            products</span> and <span className="text-blue-600 font-medium">AI Agents</span> that make people's lives easier.
          </p>
          <p className="text-gray-600 mt-3">
            i believe in simple, thoughtful design and writing clean,
            efficient code.
          </p>
          <p className="text-gray-600 mt-3">
            with this i aim to create products that people actually use and make
            me money.
          </p>

          <p className="text-gray-600 mt-3">
            when i'm not coding, you can find me playing squash or chess or vibe
            code video games with Rosebud AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
