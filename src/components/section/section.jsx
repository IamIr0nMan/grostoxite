import React from "react";
import Dashboard from "./dashboard";
import WatchList from "./watchlist";

export default function Section() {
  return (
    <section className="section">
      <WatchList />
      <div className="vertical"></div>
      <Dashboard />
    </section>
  );
}
