import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.header}>
      <div>ГЛАВНАЯ</div>
      <div>ПОСЛЕДНЕЕ</div>
      <div>ПРЕМЬЕРЫ</div>
      <div>СЕРИАЛЫ</div>
      <div>АНИМЕ</div>
      <div>МУЛЬТ</div>
      <div>TV</div>
      <div>СТОЛ ЗАКАЗОВ</div>
    </div>
  );
};

export default Header;
