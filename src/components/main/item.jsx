import React, { useState } from "react";
import "./item.css";

import checked from "./img/checked.png";

export default function Item(props) {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);

  async function buyClick() {
    setLoading(true);
    const fch = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resp = await fch.ok;
    if (resp) {
      setActive(false);
      setLoading(false);
    } else {
      alert("Не пошло !!!");
      setLoading(false);
    }
  }

  return (
    <div className="item">
      <img src={props.img} alt={props.img}></img>
      <div className="itemContent">
        <div className="itemText">{props.text}</div>
        <div className="buy">
          <div className="price">
            {props.discountIs && (
              <div className="discount">{props.discount} $</div>
            )}
            <div className="priceNumber">{props.price} $</div>
          </div>
          {active ? (
            <button id="buyBtn" onClick={buyClick}>
              {loading ? "Loading..." : "Купить"}
            </button>
          ) : (
            <button id="inPocketBtn">
              <img src={checked} alt="checked"></img> В корзине
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
