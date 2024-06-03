import React, { useEffect, useRef, useState } from "react";

import useFullscreen from "./useFullScreen";

const App = () => {
  const onFullscreen = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullscreen);
  return (
    <div className="App" style={{ height: "10000vh" }}>
      <div ref={element}>
        <img src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
