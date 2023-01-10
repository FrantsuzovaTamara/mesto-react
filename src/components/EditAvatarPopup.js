import { useRef } from "react";
import PopUpWithForm from "./PopupWithForm";

function EditAvatarPupup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatar = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: avatar.current.value });
  }

  return (
    <PopUpWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      submit={`Сохранить${isLoading ? '...' : ''}`}
      title="Обновить аватар"
    >
      <label className="pop-up__field">
        <input
          ref={avatar}
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
  );
}

export default EditAvatarPupup;