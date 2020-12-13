import React from "react";
import "./App.css";
// eslint-disable-next-line
import DataComponent from "./components/DataComponent.js";

export default function App() {
  const urlEnv = `https://ra-hooks-context-hw2-backend.herokuapp.com/`;

  return (
    <React.Fragment>
      <DataComponent url={`${urlEnv}data`} />
      <DataComponent url={`${urlEnv}error`} />
      <DataComponent url={`${urlEnv}loading`} />
    </React.Fragment>
  );
}
