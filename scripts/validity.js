import {
  firstForm,
  secondForm,
  inputTitle,
  inputJob,
  InputTitlePlace,
  InputUrl,
  spanTitle,
  spanJob,
  spanPlaceTitle,
  spanUrl,
  firstButton,
  secondButton,
  formSelector,
} from "./utils";

export default class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
  }

  _formItens() {
    const formSelector = document
      .querySelector(this._formElement)
      .cloneNode(true);

    return formSelector;
  }

  PopupForm() {
    this._element = this._formItens();
    const inputs = [inputTitle, inputJob];
    const spans = [spanTitle, spanJob];
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
      } else {
        this._buttonActive();
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });

    return this._element;
  }

  PopupAddForm() {
    this._element = this._formItens();
    const inputs = [InputTitlePlace, InputUrl];
    const spans = [spanPlaceTitle, spanUrl];
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
      } else {
        this._buttonActive();
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });

    return this._element;
  }

  inputElements() {
    this._element = this._formItens();
    this._setEvents();

    return this._element;
  }

  _buttonDisabled() {
    const buttons = [firstButton, secondButton];
    buttons.forEach((button) => {
      button.classList.add("popup__button_inactive");
      button.setAttribute("disabled", true);
    });
  }

  _buttonActive() {
    const buttons = [firstButton, secondButton];
    buttons.forEach((button) => {
      button.classList.remove("popup__button_inactive");
      button.removeAttribute("disabled", true);
    });
  }

  _checkInputValidity() {
    const inputs = [inputTitle, inputJob];
    const spans = [spanTitle, spanJob, spanPlaceTitle, spanUrl];
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
      } else {
        this._buttonActive();
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
  }

  _setEvents() {
    firstButton.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const inputs = [inputTitle, inputJob];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.PopupForm();
      });
    });

    secondButton.addEventListener("submit", function (evt) {
      evt.preventDefault();
      secondForm.reset();
    });

    const inputsAdd = [InputTitlePlace, InputUrl];
    inputsAdd.forEach((input) => {
      input.addEventListener("input", () => {
        this.PopupAddForm();
      });
    });
  }
}

export function enableValidation() {
  formSelector.forEach((item) => {
    const formEdit = new FormValidator(".popup", item.inputElement);
    const formElement = formEdit.inputElements();

    const formAdd = new FormValidator(".popup-add", item.inputElement);
    const formElementAdd = formAdd.inputElements();
    return formElement + formElementAdd;
  });
}
