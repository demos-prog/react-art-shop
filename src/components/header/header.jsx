import React from "react";
import logo from "./img/Logo.png";
import "./header.css";

export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="Logo"></img>
      <nav>
        <a href="/">Каталог</a>
        <a href="/delivery">Доставка</a>
        <a href="/payment">Оплата</a>
        <a href="/contacts">Контакты</a>
        <a href="/about">О галерее</a>
      </nav>
      <form id="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder="Поиск по названию картины"
        ></input>
        <button type="submit">Найти</button>
      </form>
    </div>
  );
}
