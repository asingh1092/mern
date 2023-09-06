// tsx file is a typescript file that runs jsx

// react dom
import { createRoot } from "react-dom";

const TODOS = ["learn react", "build something"];

// Header is a component
// message is a prop
const Header = ({ message }) => {
  return <div className="header">message</div>;
};

const App = () => {
  // this is jsx
  return (
    <div className="container">
      <Header message="Naming Contests" />
      {/*{Math.random() > 0.5 && <h2>with JSX</h2>}*/}
      {/*{TODOS.map((element) => {*/}
      {/*  return <li>{element}</li>;*/}
      {/*})}*/}
      {/*{true}*/}
      {/*{false}*/}
      {/*{undefined}*/}
    </div>
  );
  // below this comment is what ts translates jsx to
  // return React.createElement("Div", null, "Hello React!");
};

// @ts-ignore
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
