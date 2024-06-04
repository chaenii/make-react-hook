import React, { useEffect, useRef, useState } from "react";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotification = useNotification("Can I steel your Idea?", { body: "I love your Idea. Don't you?" });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};

export default App;
