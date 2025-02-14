const firstForm = document.querySelector("#form");
const secondForm = document.querySelector("#form-add");
const formEdit = document.querySelector("#form-edit");

const inputTitle = document.querySelector(".popup__description-name");
const inputJob = document.querySelector(".popup__description-job ");
const InputTitlePlace = document.querySelector(".popup-add__description-title");
const InputUrl = document.querySelector(".popup-add__description-link");
const inputEditUrl = document.querySelector(".popup-edit__description-link");

const spanTitle = document.querySelector("#input-title");
const spanJob = document.querySelector("#input-job");
const spanPlaceTitle = document.querySelector("#input-place");
const spanUrl = document.querySelector("#input-url");
const spanEditUrl = document.querySelector("#input-edit-url");

const firstButton = document.querySelector("#button-form");
const secondButton = document.querySelector("#button-form-add");
const editButton = document.querySelector("#button-form-edit");

export const formSelector = [
  {
    formElement: { firstForm, secondForm },
    inputElement: { inputTitle },
    errormessage: { spanTitle },
  },
  {
    formElement: { firstForm, secondForm },
    inputElement: { inputJob },
    errormessage: { spanJob },
  },
  {
    formElement: { firstForm, secondForm },
    inputElement: { InputTitlePlace },
    errormessage: { spanPlaceTitle },
  },
  {
    formElement: { secondForm },
    inputElement: { InputUrl },
    errormessage: { spanUrl },
  },
  {
    formElement: { formEdit },
    inputElement: { inputEditUrl },
    errormessage: { spanEditUrl },
  },
];

export class FormValidator {
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
    let allValid = true;
    inputs.forEach((input, index) => {
      if (!input.validity.valid || input.value.trim() === "") {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
        allValid = false;
      } else {
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
    if (allValid) {
      this._buttonActive();
    }
    return this._element;
  }

  PopupAddForm() {
    this._element = this._formItens();
    const inputs = [InputTitlePlace, InputUrl];
    const spans = [spanPlaceTitle, spanUrl];
    let allValid = true;
    inputs.forEach((input, index) => {
      if (!input.validity.valid || input.value.trim() === "") {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
        allValid = false;
      } else {
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
    if (allValid) {
      this._buttonActive();
    }
    return this._element;
  }

  PopupEditForm() {
    this._element = this._formItens();
    const inputs = [inputEditUrl];
    const spans = [spanEditUrl];
    let allValid = true;
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        inputs[index].classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        this._buttonDisabled();
        allValid = false;
      } else {
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
    if (allValid) {
      this._buttonActive();
    }
    return this._element;
  }

  inputElements() {
    this._element = this._formItens();
    this._setEvents();

    return this._element;
  }

  _buttonDisabled() {
    const buttons = [firstButton, secondButton, editButton];
    buttons.forEach((button) => {
      button.classList.add("popup__button_inactive");
      button.setAttribute("disabled", true);
    });
  }

  _buttonActive() {
    const buttons = [firstButton, secondButton, editButton];
    buttons.forEach((button) => {
      button.classList.remove("popup__button_inactive");
      button.removeAttribute("disabled", true);
    });
  }

  _checkInputValidity() {
    const inputs = [inputTitle, inputJob];
    const spans = [spanTitle, spanJob, spanPlaceTitle, spanUrl];
    inputs.forEach((input, index) => {
      if (!input.validity.valid || input.value.trim() === "") {
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

    editButton.addEventListener("submit", function (evt) {
      evt.preventDefault();
      formEdit.reset();
    });

    const inputEdit = [inputEditUrl];
    inputEdit.forEach((input) => {
      input.addEventListener("input", () => {
        this.PopupEditForm();
      });
    });
  }
}
