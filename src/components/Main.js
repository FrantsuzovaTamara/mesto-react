import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("Нет имени");
  const [userDescription, setUserDescription] =
    React.useState("Нет информации");
  const [userAvatar, setUserAvatar] = React.useState("Нет ссылки на аватар");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
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
  }, [userName, userDescription, userAvatar]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__main-info">
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay">
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
              onClick={props.onEditProfile}
              aria-label="Изменить"
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-button"
        ></button>
      </section>

      <section className="content">
        <ul className="cards">
          {cards.map((card) => (
            <Card onCardClick={props.onCardClick} key={card._id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
