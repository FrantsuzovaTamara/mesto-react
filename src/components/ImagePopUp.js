import React from "react";

function ImagePopUp(props) {
  return (
    <div className={`pop-up pop-up_background_dark ${props.isOpen ? "pop-up_opened" : ""}`} id="pop-up_open">
      <div className="pop-up__content">
        <button
          aria-label="Закрыть"
          type="button"
          className="pop-up__close-button"
          onClick={props.onClose}
        ></button>
        <figure className="pop-up__figure">
          <img className="pop-up__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="pop-up__place-name">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopUp;
