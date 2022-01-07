import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import Holdings from "../Holdings";
import Orders from "../Orders";

export default function Section() {
  return (
    <section className="section">
      <SectionLeft />
      <div className="vertical"></div>
      {/* <SectionRight /> */}
      {/* <Holdings /> */}
      <Orders />
    </section>
  );
}
