import React from "react";
import s from "./Movie.module.css";

const Movie = (props) => {
  let img = "./Foto/" + props.image;
  return (
    <div>
      <div className={s.post}>{props.name}</div>

      <div>
        <a href="#">
          <img src={require(`${img}`)} alt={props.name} />
        </a>
      </div>
      <div>{props.top}</div>
      <div>{props.description} </div>
      <div>{props.release}</div>
      <div>{props.country}</div>
      <div>{props.genre}</div>
      <div>{props.quality}</div>
      <div>{props.translation}</div>
      <div>{props.duration}</div>
      <div>{props.Premiere}</div>
      <div>{props.message}</div>
      <div>{props.likesCount}</div>
    </div>
  );
};
export default Movie;

// id: 1,
//           name: "Кино один",
//           top: 5,
//           image: "/Foto/evakuaciya.jpg",
//           description: "Laborum dolore cupidatat amet sint.",
//           release: 2016,
//           country: "Россия",
//           genre: "Комедия",
//           quality: 720,
//           translation: "Русский",
//           duration: 90,
//           Premiere: 2021,
//           message: "Hi, how are you?",
//           likesCount: 12,
