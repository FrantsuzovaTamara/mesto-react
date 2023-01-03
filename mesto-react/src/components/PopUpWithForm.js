import React from "react";

function PopUpWithForm(props) {
    return (
    <div
      className={`pop-up ${props.isOpen ? "pop-up_opened" : ""}`}
      id={`pop-up_${props.name}`}
    >
      <div className="pop-up__content">
        <button
          aria-label="Закрыть"
          type="button"
          className="pop-up__close-button"
          onClick={props.onClose}
        ></button>
        <form className="pop-up__form" name={props.name} noValidate>
          <h3 className="pop-up__title">{props.title}</h3>
          {props.children}
          <button
            type="submit"
            className="pop-up__submit-button pop-up__save-button"
            disabled
          >
            {props.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpWithForm;
