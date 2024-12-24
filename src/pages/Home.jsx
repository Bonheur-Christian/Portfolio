import React from "react";
import LandingBar from "../components/LandingBar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <LandingBar />
      <Intro />
      <Projects />
      <Footer/>
    </div>
  );
}

export default Home;
