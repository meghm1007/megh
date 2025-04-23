import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <h2 className="text-2xl mb-4">get in touch</h2>
      <p>
        feel free to reach out if you want to collaborate on a project, have
        questions about my work, or just want to say hello.
      </p>
      <p>
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
      <p className="mb-4">
        i'm always open to interesting conversations and new opportunities!
      </p>
      <p className="mb-4">
        i will reply to every single message :-)
      </p>
    </div>
  );
};

export default Contact;
