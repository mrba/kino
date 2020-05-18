import React from "react";
import s from "./Posters.module.css";
import Sliders from "./Sliders";

const Posters = (props) => {
  let sliderElements = props.posts.map((movie) => (
    <Sliders name={movie.name} top={movie.top} image={movie.image} />
  ));
  return (
    <div>
      <div className={s.buttonLeft}>
        <a href="#11">&lt;</a>
      </div>
      <div className={s.buttonRight}>
        <a href="#22">&gt;</a>
      </div>
      <div className={s.posters}>{sliderElements}</div>
    </div>
  );
};
export default Posters;
