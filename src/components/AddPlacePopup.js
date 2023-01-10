import { useRef } from "react";
import PopUpWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const cardName = useRef();
  const cardLink = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard({
      name: cardName.current.value,
      link: cardLink.current.value
    })
  }

  return (
    <PopUpWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add"
      submit={`Создать${isLoading ? '...' : ''}`}
      title="Новое место"
    >
      <label className="pop-up__field">
        <input
          ref={cardName}
          id="name"
          type="text"
          name="name"
          className="pop-up__input pop-up__input_add_name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="pop-up__input-error name-error"></span>
      </label>
      <label className="pop-up__field">
        <input
          ref={cardLink}
          id="link"
          type="url"
          name="link"
          className="pop-up__input pop-up__input_add_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="pop-up__input-error link-error"></span>
      </label>
    </PopUpWithForm>
  );
}

export default AddPlacePopup;