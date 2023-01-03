import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <li onClick={handleClick} className="card">
      <button
        type="button"
        className="card__delete-button"
        aria-label="Удалить"
      ></button>
      <img className="card__image" src={props.card.link} alt={props.card.name} />
      <div className="card__text">
        <h2 className="card__place-name">{props.card.name}</h2>
        <div className="card__like">
          <button
            type="button"
            className="card__like-button"
            aria-label="Нравится"
          ></button>
          <p className="card__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
