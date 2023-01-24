import { useRef } from "react";
import PopUpWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddCard,
  isLoading,
  register,
  errors,
  isValid,
}) {
  const cardName = useRef();
  const { ref, ...rest } = register("name", {
    required: "Поле должно быть заполнено",
    minLength: {
      value: 2,
      message: "Слишком маленькое название",
    },
    maxLength: {
      value: 30,
      message: "Слишком большое название",
    },
  });

  /* const cardLink = useRef();
  const { ref, ...restLink } = register('link', {
    required: "Поле должно быть заполнено",
    pattern: {
      value:/^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
      message: "Пожалуйста, ведите url правильно"
    }
  }); */

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard({
      name: cardName.current.value,
      /* link: cardLink.current.value, */
    });
  }

  return (
    <PopUpWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add"
      submit={`Создать${isLoading ? "..." : ""}`}
      title="Новое место"
      isValid={isValid}
    >
      <label className="pop-up__field">
        <input
          id="name"
          type="text"
          placeholder="Название"
          className={`pop-up__input pop-up__input_add_name${
            errors.name ? " pop-up__input_type_error" : ""
          }`}
          {...rest}
          name="name"
          ref={(e) => {
            ref(e);
            cardName.current = e;
          }}
        />
        {errors.name && (
          <span
            className={`pop-up__input-error avatar-link-error${
              errors.name ? " pop-up__input-error_active" : ""
            }`}
          >
            {errors.name.message}
          </span>
        )}
      </label>
      {/*  <label className="pop-up__field">
        <input
          id="link"
          type="url"
          placeholder="Ссылка на картинку"
          className={`pop-up__input pop-up__input_add_link${
            !isValid ? " pop-up__input_type_error" : ""
          }`}
          {...restLink}
          name="link"
          ref={(e) => {
            ref(e)
            cardLink.current = e
          }}
        />
        <span
          className={`pop-up__input-error avatar-link-error${
            !isValid ? " pop-up__input-error_active" : ""
          }`}
        >
          {errors.link && errors.link.message}
        </span>
      </label> */}
    </PopUpWithForm>
  );
}

export default AddPlacePopup;
