import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

export default function Section() {
  return (
    <section className="section">
      <SectionLeft />
      <div className="vertical"></div>
      <SectionRight />
    </section>
  );
}
