import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopUpWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({name: name, about: description});
  }

  return (
    <PopUpWithForm
          isOpen={isOpen}
          onClose={onClose}
          name="edit"
          submit={`Сохранить${isLoading ? '...' : ''}`}
          title="Редактировать профиль"
          onSubmit={handleSubmit}
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
              value={name || ''}
              onChange={handleChangeName}
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
              value={description || ''}
              onChange={handleChangeDescription}
              required
            />
            <span className="pop-up__input-error about-error"></span>
          </label>
    </PopUpWithForm>
  )
}

export default EditProfilePopup