import React, { useState } from "react";
import { FaDownload, FaTimes } from "react-icons/fa";

/**
 * ResumeButton Component
 * 
 * A floating button with liquid glass design that allows users to download
 * the resume PDF. Features a close button to hide it and is mobile-friendly.
 * 
 * The component uses:
 * - React state to manage visibility
 * - Glassmorphism effect for modern UI
 * - Responsive design for mobile devices
 * - Smooth animations for interactions
 */
const ResumeButton = () => {
  // State to track if the button is visible or hidden
  const [isVisible, setIsVisible] = useState(true);

  /**
   * Handles the resume download action
   * Creates a temporary link element and triggers the download
   */
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    // Set the path to the resume file in the public folder
    link.href = "/Megh_Resume_Aug2025.pdf";
    // Set the filename for the download
    link.download = "Megh_Resume_Aug2025.pdf";
    // Append to body, click, and remove (required for Firefox)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /**
   * Handles hiding the button
   */
  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render anything if the button is hidden
  if (!isVisible) return null;

  return (
    <div className="resume-button-container">
      {/* Close button (X) - positioned on the side */}
      <button
        onClick={handleClose}
        className="resume-close-btn"
        aria-label="Close resume button"
        title="Hide resume button"
      >
        <FaTimes />
      </button>

      {/* Main download button with liquid glass effect */}
      <button
        onClick={handleDownload}
        className="resume-download-btn"
        aria-label="Download resume"
        title="Download my resume"
      >
        <FaDownload className="download-icon" />
        <span className="download-text">download resume</span>
      </button>
    </div>
  );
};

export default ResumeButton;

