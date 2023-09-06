import Header from "./header";
// these are hook functions for react
import { useEffect, useState } from "react";

const App = () => {
  // reactive variable
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // can be used to fetch, Axios, data analytics
    // basically anything outside of React
    // to add side effects
    const intervalId = setInterval(() => {
      console.log({ counter });
    }, 1000);

    // console logs don't need to clean up usually
    console.log("Rendering app component");

    return () => {
      // side effect clean up usually for async calls
      clearInterval(intervalId);
    };

    // deps array is used to block effects unless some deps needs re-rendering
  }, [counter]);

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
