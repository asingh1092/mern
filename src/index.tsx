// tsx file is a typescript file that runs jsx

// react dom
import { API_SERVER_URL } from "./public-config";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import axios from "axios";

// @ts-ignore
const container = document.getElementById("app");
const root = createRoot(container);

// fetch or Axios to hit endpoints
axios.get(`${API_SERVER_URL}/contests`).then((resp) => {
  console.log(resp);
  root.render(
    <App initialData={{ contests: resp.data.contests }} />,
  );
});
