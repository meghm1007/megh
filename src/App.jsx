import React from "react";
import Profile from "./components/Profile";
import CurrentWork from "./components/CurrentWork";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Writings from "./components/Writings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeButton from "./components/ResumeButton";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-16 mx-auto">
        <Profile />

        <CurrentWork />

        <Projects />

        <Writings />

        <Interests />

        <Contact />

        <Footer />
      </div>
      
      {/* Floating resume download button */}
      <ResumeButton />
    </div>
  );
};

export default App;
