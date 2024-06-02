import React from "react";
import useInput from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 14;
  const name = useInput("Aka.", maxLen);

  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
