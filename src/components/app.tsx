import Header from "./header";

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

export default App;
