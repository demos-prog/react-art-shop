import React from "react";
import "./item.css";

import checked from "./img/checked.png";

export default function Item(props) {
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
          {props.active ? (
            <button id="buyBtn">Купить</button>
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
