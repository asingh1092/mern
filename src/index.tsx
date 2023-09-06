// tsx file is a typescript file that runs jsx

// react dom
import { createRoot } from "react-dom";
import App from "./components/app";

// @ts-ignore
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
