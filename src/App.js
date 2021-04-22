import React from "react";
import ".//styles/styles.scss";

import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Content } from "./content/Content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-container">
        <span className="item1">
          <Sidebar />
        </span>
        <span className="item2">
          {" "}
          <Content />
        </span>
      </div>
    </div>
  );
}
