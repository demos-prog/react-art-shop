import "./null_styles.css";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Delivery from "./components/delivery/delivery";
import Payment from "./components/payment/payment";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    } else {
      return null;
    }
  });

  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <Header value={value} setValue={setValue} />
        </div>
        <hr />
        <div className="container">
          <Switch>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/delivery">
              <Delivery />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Main arr={list} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
