import React from "react";

export default function Box({ title, item, result }) {
  let boxResult;

  if (title === "Computer" && result !== "tie" && result !== "") {
    boxResult = result === "win" ? "lose" : "win";
  } else {
    boxResult = result;
  }

  return (
    <div className={`box ${result && boxResult}`}>
      <h1>{title}</h1>
      <img
        src={item && item.img}
        alt={item && item.desc}
        className="item-img"
      />
      <h2>{result && boxResult}</h2>
    </div>
  );
}
