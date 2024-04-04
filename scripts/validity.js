const firstForm = document.querySelector("#form");
const secondForm = document.querySelector("#form-add");

const inputTitle = document.querySelector(".popup__description-name");
const inputJob = document.querySelector(".popup__description-job ");
const InputTitlePlace = document.querySelector(".popup-add__description-title");
const InputUrl = document.querySelector(".popup-add__description-link");

const spanTitle = document.querySelector("#input-title");
const spanJob = document.querySelector("#input-job");
const spanPlaceTitle = document.querySelector("#input-place");
const spanUrl = document.querySelector("#input-url");

const firstButton = document.querySelector("#button-form");
const secondButton = document.querySelector("#button-form-add");

const form = [
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
    formElement: {firstForm, secondForm },
    inputElement: { InputTitlePlace },
    errormessage: { spanPlaceTitle },
  },
  {
    formElement: { secondForm },
    inputElement: { InputUrl },
    errormessage: { spanUrl },
  },

];

class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
  }

  _formItens() {
    const formSelector = document
      .querySelector(this._formElement)
      .cloneNode(true);

    return formSelector;
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
}

class PopupForm extends FormValidator {
  constructor(formElement, inputElement) {
    super(formElement);
    this._inputElement = inputElement;
  }

  inputElements() {
    this._element = super._formItens();
    this._setEvents();
    return this._element;
  }


  _checkInputValidity() {
    const inputs = [inputTitle, inputJob];
    const spans = [spanTitle, spanJob]
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        input.classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        super._buttonDisabled();
      } else {
        super._buttonActive();
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
  }

  _setEvents() {
    firstButton.addEventListener("submit", function (evt) {
      evt.preventDefault()
    });

    const inputs = [inputTitle, inputJob];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity();
      });
    });
  }
}


class PopupAddForm extends FormValidator {
  constructor(formElement, inputElement, errorMessage) {
    super(formElement);
    this._inputElement = inputElement;
    this._errorMessage = errorMessage;
  }

  inputElements() {
    this._element = super._formItens();
    this._setEvents();
    return this._element;
  }


  _checkInputValidity() {
    const inputs = [InputTitlePlace, InputUrl];
    const spans = [spanPlaceTitle, spanUrl]
    inputs.forEach((input, index) => {
      if (!input.validity.valid) {
        input.classList.add("popup__input_type_error");
        spans[index].textContent = input.validationMessage;
        super._buttonDisabled();
      } else {
        super._buttonActive();
        input.classList.remove("popup__input_type_error");
        spans[index].textContent = " ";
      }
    });
  }

  _setEvents() {
    secondButton.addEventListener("submit", function (evt) {
      evt.preventDefault()
     secondForm.reset()
    });

    const inputs = [InputTitlePlace, InputUrl];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity();
      });
    });
  }
}


  export default function enableValidation(forms){

  form.forEach((item) => {
    const form = forms ? new PopupForm(".popup", item.inputElement) : new PopupAddForm(".popup-add", item.inputElement);
    const formElement = form.inputElements();
    return formElement;
  });
  }