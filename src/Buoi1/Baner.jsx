import React from "react";

export default function Baner() {
  return (
    <div className="baner">
      <h1 className="title">A warm welcome!</h1>
      <p className="bannerText">
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been removed from the framework. Why create custom CSS
        when you can use utilities?
      </p>
      <button className="cta">Call to action</button>
    </div>
  );
}
