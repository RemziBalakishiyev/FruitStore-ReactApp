import React, { Component, useState } from "react";
import "./ChangeColor.css";

export default function ChangeColor(props) {
  const colors = ["white", "red", "blue", "yellow", "black"];

  const colorRender = function (event) {
    console.log(event.target.value);
    props.onChangeColor(event.target.value);
  };
  return (
    <div className="color--area">
      {colors.map((c, index) => (
        <input
          key={index}
          type="radio"
          name="color"
          className={`color--changer--btn accent-color-${c}`}
          onChange={colorRender}
          value={c}
        />
      ))}
    </div>
  );
}
