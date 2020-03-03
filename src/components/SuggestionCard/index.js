import React from "react";

import image from "../../assets/products/product01.png";
import "./styles.css";

export default function SuggestionCard() {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="legends">
        <h1>R$ 204,90</h1>
      </div>
    </div>
  );
}
