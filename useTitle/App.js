import React, { useEffect, useState } from "react";
import useTitle from "./useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
};

export default App;
