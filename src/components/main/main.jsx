import React from "react";
import Item from "./item";
import "./main.css";

import img1 from "./img/main-img1.png";
import img2 from "./img/main-img2.png";
import img3 from "./img/main-img3.png";
import img4 from "./img/main-img4.png";

export default function Main() {
  return (
    <div>
      <h1>Картины эпохи Возрождения</h1>
      <div className="items">
        <Item
          img={img1}
          text="«Рождение Венеры» Сандро Боттичелли"
          discountIs={true}
          discount="2 000 000"
          price="1 000 000"
          active={true}
        />
        <Item
          img={img2}
          text="«Тайная вечеря» Леонардо да Винчи"
          discountIs={false}
          discount="2 000 000"
          price="3 000 000"
          active={true}
        />
        <Item
          img={img3}
          text="«Сотворение Адама» Микеланджело"
          discountIs={true}
          discount="6 000 000"
          price="5 000 000"
          active={false}
        />
        <Item
          img={img4}
          text="«Урок анатомии» Рембрандт"
          discountIs={true}
          discount="2 000 000"
          price="1 000 000"
          active={false}
        />
      </div>
    </div>
  );
}
