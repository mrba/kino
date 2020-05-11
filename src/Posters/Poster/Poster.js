import React from "react";
import s from "./Poster.module.css";
import Movie from "./Movie/Movie";
import Sorting from "../Sorting/Sorting";

const Poster = (props) => {
  debugger;
  let movieElements = props.posts.map((movie) => (
    <Movie
      name={movie.name}
      top={movie.top}
      image={movie.image}
      description={movie.description}
      release={movie.release}
      country={movie.country}
      genre={movie.genre}
      quality={movie.quality}
      translation={movie.translation}
      duration={movie.duration}
      Premiere={movie.Premiere}
      message={movie.message}
      likesCount={movie.likesCount}
    />
  ));
  return (
    <div className={s.poster}>
      <div className={s.sorting}>
        <Sorting />
      </div>
      {movieElements}
    </div>
  );
};

export default Poster;
