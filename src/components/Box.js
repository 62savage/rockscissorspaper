import React from "react";

export default function Box({ title, item }) {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img src={item && item.img} alt="rock" className="item-img" />
      <h2>WIN</h2>
    </div>
  );
}
