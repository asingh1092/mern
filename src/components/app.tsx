import Header from "./header";
import { useState } from "react";

const App = () => {
  // reactive variable
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Header message="Naming Contests" />
      <button
        // event handler for counter variable
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
  // below this comment is what ts translates jsx to
  // return React.createElement("Div", null, "Hello React!");
};

export default App;
