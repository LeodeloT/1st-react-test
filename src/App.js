import React, { Fragment } from "react";
import "./styles.css";
import { TableFunc } from "./Table";

export default function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <TableFunc />
    </Fragment>
  );
}
