import React from "react";
import useClick from "./useClick";

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;
