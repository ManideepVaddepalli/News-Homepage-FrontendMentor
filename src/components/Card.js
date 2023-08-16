import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <figure>
        <img
          src={props.img}
          height="256"
          width="200"
          alt="popular-section-img"
        ></img>
      </figure>
      <div className="text-content">
        <h2>{props.id}</h2>
        <h5>{props.title}</h5>
        <p>{props.para}</p>
      </div>
    </div>
  );
}
