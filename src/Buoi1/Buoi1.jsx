import React from "react";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Baner from "./Baner";

import "./Buoi1.css";
import Footer from "./Footer";
// import Item from "./Item";
import Content from "./Content";

export default function Buoi1() {
  return (
    <div>
      <Header />
      <div className="container">
        <Baner />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
