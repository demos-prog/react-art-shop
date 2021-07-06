import React from "react";
import logo from "./img/Logo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"></img>
      <nav>
        <a href="/catalog">Каталог</a>
        <a href="/dostavks">Доставка</a>
        <a href="/oplata">Оплата</a>
        <a href="/contacts">Контакты</a>
        <a href="/about">О галерее</a>
      </nav>
      <form id="search">
        <input type="text" placeholder="Поиск по названию картинки"></input>
        <button type="submit">Найти</button>
      </form>
    </div>
  );
}
