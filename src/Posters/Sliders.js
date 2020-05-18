import React from "react";
import s from "./Posters.module.css";

const Sliders = (props) => {
  return (
    <div className={s.imeg}>
      <a href="#1">
        <img
          srcSet={require(`./Poster/Movie/Foto/${props.image}`)}
          alt={props.name}
        />
      </a>
    </div>
  );
};
export default Sliders;
