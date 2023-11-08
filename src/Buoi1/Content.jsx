import React from "react";
import Item from "./Item";

export default function Content() {
  return (
    <div className="content row">
      <div className="col-4">
        <Item
          fontawesome="fa-solid fa-layer-group"
          h1="Fresh new layout"
          p="With Bootstrap 5, we've created a fresh new layout for this template!"
        />
      </div>

      <div className="col-4">
        <Item
          fontawesome="fa-solid fa-download"
          h1="Free to download"
          p="As always, Start Bootstrap has a powerful collectin of free templates."
        />
      </div>
      <div className="col-4">
        <Item
          fontawesome="fa-regular fa-rectangle-list"
          h1="Jumbotron hero header"
          p="The heroic part of this template is the jumbotron hero header!"
        />
      </div>
      <div className="col-4">
        <Item
          fontawesome="fa-brands fa-bootstrap"
          h1="Feature boxes"
          p="We've created some custom feature boxes using Bootstrap icons!"
        />
      </div>
      <div className="col-4">
        <Item
          fontawesome="fa-solid fa-code"
          h1="Simple clean code"
          p="We keep our dependencies up to date and squash bugs as they come!"
        />
      </div>
      <div className="col-4">
        <Item
          fontawesome="fa-solid fa-circle-check"
          h1="A name you trust"
          p="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
        />
      </div>
    </div>
  );
}
