import "./null_styles.css";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";
import { useState } from "react";

import img1 from "./components/main/img/main-img1.png";
import img2 from "./components/main/img/main-img2.png";
import img3 from "./components/main/img/main-img3.png";
import img4 from "./components/main/img/main-img4.png";

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

export default function App() {
  const [value, setValue] = useState("");

  const list = arr.map((item) => {
    if (item.text.includes(value)) {
      return item;
    }
    return null;
  });

  return (
    <div className="wrapper">
      <div className="container">
        <Header value={value} setValue={setValue} />
      </div>
      <hr />
      <div className="container">
        <Main arr={list} />
      </div>
    </div>
  );
}
