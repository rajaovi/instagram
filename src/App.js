import "./App.css";
import "./common/style/common.scss";

import { Routes, Route } from "react-router-dom";

import RoutePage from "./routes";
function App() {
  return (
      <div className="App">
        <RoutePage/>
      </div>
  );
}

export default App;
