import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ArticleSection from "./components/ArticleSection";

function App() {
  return (
    <>
      <Navbar />
      <ContentSection />
      <HeroSection />
      <ArticleSection />
    </>
  );
}

export default App;
