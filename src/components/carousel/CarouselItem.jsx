import React from "react";

export default function CarouselItem({ img }) {
    return (
      <div className="carousel-card">
        <img src={img}></img>
      </div>
    );
  }