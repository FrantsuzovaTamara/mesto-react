import { useRef } from "react";
import PopUpWithForm from "./PopupWithForm";

function EditAvatarPupup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  register,
  errors
}) {
  const avatar = useRef();
  const { ref, ...rest } = register('avatar', {
    required: "Поле должно быть заполнено",
    pattern: {
      value:/^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
      message: "Пожалуйста, ведите url правильно"
    }
  });
  const { isValid } = formState;
  console.log(isValid)

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(avatar.current.value)
    onUpdateAvatar({ avatar: avatar.current.value });
  }

  return (
    <PopUpWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      submit={`Сохранить${isLoading ? "..." : ""}`}
      title="Обновить аватар"
      isValid={isValid}
    >
      <label className="pop-up__field">
        <input
          id="avatar-link"
          type="url"
          placeholder="Ссылка на картинку"
          className={`pop-up__input pop-up__input_add_link${
            errors.avatar ? " pop-up__input_type_error" : ""
          }`}
          {...rest}
          name="avatar"
          ref={(e) => {
            ref(e)
            avatar.current = e
          }}
        />
        {errors.avatar && (
          <span
            className={`pop-up__input-error avatar-link-error${
              errors.avatar ? " pop-up__input-error_active" : ""
            }`}
          >
            {errors.avatar.message}
          </span>
        )}
      </label>
    </PopUpWithForm>
  );
}

export default EditAvatarPupup;
