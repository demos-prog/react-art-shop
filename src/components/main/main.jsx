import React from "react";
import Item from "./item";
import "./main.css";

import img1 from "./img/main-img1.png";
import img2 from "./img/main-img2.png";
import img3 from "./img/main-img3.png";
import img4 from "./img/main-img4.png";
import { nanoid } from "nanoid";

const arr = [
  {
    img: img1,
    text: "«Рождение Венеры» Сандро Боттичелли",
    discountIs: true,
    discount: 2000000,
    price: 1000000,
  },
  {
    img: img2,
    text: "«Тайная вечеря» Леонардо да Винчи",
    discountIs: false,
    discount: 2000000,
    price: 3000000,
  },
  {
    img: img3,
    text: "«Сотворение Адама» Микеланджело",
    discountIs: true,
    discount: 6000000,
    price: 5000000,
  },
  {
    img: img4,
    text: "«Урок анатомии» Рембрандт",
    discountIs: true,
    discount: 2000000,
    price: 1000000,
  },
];

export default function Main() {
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

  const list = arr.map((item) => {
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
