// tsx file is a typescript file that runs jsx

// react dom
import { createRoot } from "react-dom";
const App = () => {
  return <div>Hello React</div>; // this is jsx
  // below this comment is what ts translates jsx to
  // return React.createElement("Div", null, "Hello React!");
};

// @ts-ignore
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
