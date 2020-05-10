import React from "react";
import s from "./Posters.module.css";
import img from "../Foto/komnata-zhelaniy.jpg";
import store from "../state";

const Posters = () => {
  debugger;

  return (
    <div>
      <div className={s.buttonLeft}>
        <a href="#">&lt;</a>
      </div>
      <div className={s.buttonRight}>
        <a href="#">&gt;</a>
      </div>
      <div className={s.posters}>
        <div className={s.imeg}>
          <a href="#1">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#2">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#3">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#4">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#5">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#6">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div className={s.imeg}>
          <a href="#7">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Posters;
