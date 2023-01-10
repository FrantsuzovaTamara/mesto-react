export class FormValidator {
  constructor(form, formSelectors) {
    this._form = form;
    this._formSelectors = formSelectors;
    this._button = form.querySelector(this._formSelectors.submitButtonSelector);
    this._inputs = form.querySelectorAll(this._formSelectors.inputSelector);
  }

  _showInputError(inputElement, errorMessage) {
    this._error = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formSelectors.inputErrorClass);
    this._error.textContent = errorMessage;
    this._error.classList.add(this._formSelectors.errorClass);
  }

  _hideInputError(inputElement) {
    this._error = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._formSelectors.inputErrorClass);
    this._error.classList.remove(this._formSelectors.errorClass);
    this._error.textContent = '';
  }

  _checkInputValidity(input) {
    !input.validity.valid
    ? this._showInputError(input, input.validationMessage)
    : this._hideInputError(input);
  }

  _hasInvalidInput() {
    const inputList = Array.from(this._inputs);
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._formSelectors.inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    } else {
      this._button.classList.remove(this._formSelectors.inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  hideErrorMesseges() {
    this._toggleButtonState();
    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
