import React from "react";
import s from "./Poster.module.css";
import img from "../../Foto/feya.jpg";
import Sorting from "../Sorting/Sorting";
import store from "../../state";

const Poster = () => {
  const post = function name(params) {
    for (var i = 0; i < store._state.Posters.posts.length - 1; i++) {
      // id: 1,
      //     name: "Кино один",
      //     top: 5,
      //     image: "/Foto/evakuaciya.jpg",
      //     description: "Laborum dolore cupidatat amet sint.",
      //     release: 2016,
      //     country: "Россия",
      //     genre: "Комедия",
      //     quality: 720,
      //     translation: "Русский",
      //     duration: 90,
      //     Premiere: 2021,
      //     message: "Hi, how are you?",
      //     likesCount: 12,
    }
  };
  return (
    <div className={s.poster}>
      <div className={s.sorting}>
        <Sorting />
      </div>
      <div className={s.post}>
        <h2>кино один</h2>
        <div>
          <a href="">
            <img srcSet={img} alt="Кино один" />
          </a>
        </div>
        <div>звездочки</div>
        <div>
          slkdfj;lksdjl;kasdflksdajlksdflksadflk';asldkljkasdfjl;kasdflkasdflksadfjlkasjdfal;skdja;sldkj;lasdkfl;asdkf;lkasdjflksdflj;ksafl;kasdfj
        </div>
        <div>Год выпуска</div>
        <div>Страна</div>
        <div>Жанр</div>
        <div>Качество</div>
        <div>Перевод</div>
        <div>Продолжительность</div>
        <div>Премьера</div>
        <div>Смотреть онлайн</div>
        <div>Лайки</div>
        <div>сообщение</div>
        <div>Дата размещения</div>
      </div>
    </div>
  );
};
export default Poster;
