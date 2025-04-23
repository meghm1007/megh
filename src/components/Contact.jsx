import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <h2 className="text-2xl mb-4">get in touch</h2>
      <div className="p-4 border-l-2 border-gray-700">
        <p className="text-gray-600">
          feel free to reach out if you want to <span className="text-blue-600 font-medium">collaborate</span> on a project, have
          questions about my work, or just want to say hello.
        </p>
        <p className="text-gray-600 mt-3">
          the best way to contact me is via{" "}
          <a href="mailto:mehtamegh@gmail.com" className="highlight">
            email (mehtamegh@gmail dot com)
          </a>{" "}
          or{" "}
          <a
            href="https://x.com/itsthemegh"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            𝕏
          </a>{" "}
          or on{" "}
          <a
            href="https://www.linkedin.com/in/mehtamegh/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            LinkedIn
          </a>
          .
        </p>
        <p className="text-gray-600 mt-3">
          i'm always open to <span className="text-blue-600 font-medium">interesting conversations</span> and new <span className="text-blue-600 font-medium">opportunities</span>!
        </p>
        <p className="text-gray-600 mt-3">
          i will reply to every single message :-)
        </p>
      </div>
    </div>
  );
};

export default Contact;
