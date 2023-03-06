import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Skills from "../components/SkillsSection/Skills";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
