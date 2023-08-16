import React from "react";
import firstImage from "../assets/images/image-retro-pcs.jpg";
import secondImage from "../assets/images/image-top-laptops.jpg";
import thirdImage from "../assets/images/image-gaming-growth.jpg";

export default function Card(props) {
  return (
    <div className="card-container">
      <figure>
        <img src={props.img} height="256" width="200"></img>
      </figure>
      <div className="text-content">
        <h2>{props.id}</h2>
        <h5>{props.title}</h5>
        <p>{props.para}</p>
      </div>
    </div>
  );
}
