import {useEffect, useState} from 'react';
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState("Нет имени");
  const [userDescription, setUserDescription] = useState("Нет информации");
  const [userAvatar, setUserAvatar] = useState("Нет ссылки на аватар");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsList]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__main-info">
          <div onClick={onEditAvatar} className="profile__avatar-overlay">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар
                пользователя"
            />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__about">{userDescription}</p>
            </div>
            <button
              onClick={onEditProfile}
              aria-label="Изменить"
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-button"
        ></button>
      </section>

      <section className="content">
        <ul className="cards">
          {cards.map((card) => (
            <Card onCardClick={onCardClick} key={card._id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
