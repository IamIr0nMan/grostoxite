import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./dashboard";
import WatchList from "./watchlist";
import Funds from "../funds";
import Holdings from "../holdings";
import Orders from "../orders";
import Profile from "../profile";
import NotFound from "../../pages/notFound";

export default function Section() {
  return (
    <section className="section">
      <WatchList />
      <div className="vertical"></div>

      <Routes>
        <Route path="/funds" element={<Funds />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
