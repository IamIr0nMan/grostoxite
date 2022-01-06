import React from "react";
import List from "./List.js";

export default function SectionLeft() {
  return (
    <div>
      <div className="split left">
        <div /* className="centered" */>
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </div>
  );
}
