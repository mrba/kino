import React from "react";
import logo from "./logo.svg";
import s from "./App.module.css";
import Header from "./Header/Header";
import Posters from "./Posters/Posters";
import Poster from "./Posters/Poster/Poster";
import NavBar from "./NavBar/NavBar";
import store from "./state";

function App() {
  return (
    <div className={s.app}>
      <div className={s.fon}> </div>
      <div className={s.kino}>
        <Header className={s.header} />
      </div>
      <div className={s.kinoPosters}>
        <Posters className={s.posters} />
      </div>
      <div className={s.kinoPoster}>
        <NavBar className={s.navBar} />
        <Poster className={s.poster} posts={store._state.posters.posts} />
      </div>
    </div>
  );
}

export default App;
