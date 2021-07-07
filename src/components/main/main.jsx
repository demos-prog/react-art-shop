import React from "react";
import Item from "./item";
import "./main.css";
import { nanoid } from "nanoid";

export default function Main(props) {
  function tostr(num) {
    let str = num.toString();
    let resStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      if (i % 3 === 0) {
        resStr += " " + str[i];
      } else {
        resStr += str[i];
      }
    }
    return resStr.split("").reverse().join("");
  }

  const list = props.arr.map((item) => {
    const disc = tostr(item.discount);
    const prc = tostr(item.price);

    return (
      <Item
        key={nanoid()}
        img={item.img}
        text={item.text}
        discountIs={item.discountIs}
        discount={disc}
        price={prc}
      />
    );
  });

  return (
    <div>
      <h1>Картины эпохи Возрождения</h1>
      <div className="items">{list}</div>
    </div>
  );
}
