import React, { useEffect, useRef, useState } from "react";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>monster</p>
    </div>
  );
};

export default App;
