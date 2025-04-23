import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 mb-8 text-sm">
      <div className="text-center">
        <p>© {currentYear} megh. all rights reserved.</p>
        <p className="mt-2">built with 💜 by megh</p>
      </div>
    </footer>
  );
};

export default Footer; 