import React from "react";

export default function Item(props) {
  return (
    <div className=" item">
      <i className={`${props.fontawesome}`}></i>
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
    </div>
  );
}
