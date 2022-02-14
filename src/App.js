import React, { useEffect } from "react";
import HeroSection from "./components/hero.js";

function App() {
  function useTitle(title) {
    useEffect(() => {
      const prevTitle = document.title
      document.title = title
      return () => {
        document.title = prevTitle
      }
    })
  }

  const Title = () => {
    useTitle("Let's Talk Sustainability | York University Symposium 2022")
    return (
      <></>
    )
  }

  return (
    <>
      <Title />
      <HeroSection></HeroSection>
    </>
  );
}

export default App;
