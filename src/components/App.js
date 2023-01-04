import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopUpWithForm from "./PopupWithForm.js";
import ImagePopUp from "./ImagePopup.js"

function App() {

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isSelectedCardPopupOpen, setIsSelectedCardPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsSelectedCardPopupOpen(!isSelectedCardPopupOpen);
  }

  function closeAllPopUps() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSelectedCardPopupOpen(false);
  }

  return (
    <>
      <Header />
      
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopUpWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopUps}
        name="edit-avatar"
        submit="Сохранить"
        title="Обновить аватар"
      >
        <label className="pop-up__field">
          <input
            id="avatar-link"
            type="url"
            name="avatar"
            className="pop-up__input pop-up__input_add_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="pop-up__input-error avatar-link-error"></span>
        </label>
      </PopUpWithForm>

      <PopUpWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopUps}
        name="edit"
        submit="Сохранить"
        title="Редактировать профиль"
      >
        <label className="pop-up__field">
          <input
            id="profile-name"
            type="text"
            name="name"
            className="pop-up__input pop-up__input_change_name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="pop-up__input-error profile-name-error"></span>
        </label>
        <label className="pop-up__field">
          <input
            id="about"
            type="text"
            name="about"
            className="pop-up__input pop-up__input_change_about"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="pop-up__input-error about-error"></span>
        </label>
      </PopUpWithForm>

      <PopUpWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopUps}
        name="add"
        submit="Создать"
        title="Новое место"
      >
        <label className="pop-up__field">
          <input
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
      <ImagePopUp card={selectedCard} isOpen={isSelectedCardPopupOpen} onClose={closeAllPopUps} />
    </>
  );
}

export default App;
