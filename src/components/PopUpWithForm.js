import React from "react";

function PopUpWithForm({isOpen, name, onClose, title, children, submit}) {
    return (
    <div
      className={`pop-up ${isOpen ? "pop-up_opened" : ""}`}
      id={`pop-up_${name}`}
    >
      <div className="pop-up__content">
        <button
          aria-label="Закрыть"
          type="button"
          className="pop-up__close-button"
          onClick={onClose}
        ></button>
        <form className="pop-up__form" name={name} noValidate>
          <h3 className="pop-up__title">{title}</h3>
          {children}
          <button
            type="submit"
            className="pop-up__submit-button pop-up__save-button"
            disabled
          >
            {submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpWithForm;
