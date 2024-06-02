import React, { useEffect, useRef, useState } from "react";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
