
import { enableValidation } from "./index.js";
import { addNewCard, resetInputCard } from "./index.js";

import {
  formElement,
  editButton,
  closeButton,
  nameInput,
  jobInput,
  profileNameInput,
  profileJobInput,
  addButton,
  formElementAdd,
  closeButtonAdd,
  createButton,
  imagePopupOnened,
} from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    formElement.classList.add("popup-opened");
    nameInput.value = profileNameInput.textContent;
    jobInput.value = profileJobInput.textContent;
  }

  openPopupAdd() {
    formElementAdd.classList.add("popup-add-opened");
    createButton.classList.add("popup__button_inactive");
    createButton.classList.remove("popup-add__button");
  }

  close() {
    formElement.classList.remove("popup-opened");
    formElementAdd.classList.remove("popup-add-opened");
  }

  _handleEscClose() {
    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        formElement.classList.remove("popup-opened");
        formElementAdd.classList.remove("popup-add-opened");
        imagePopupOnened.classList.remove("popup-img-opened");
      }
    });
  }

  _clickClosePopup() {
    const forms = [formElement, formElementAdd];
    forms.forEach((item) => {
      item.addEventListener("click", function (evt) {
        if (
          evt.target.classList.contains("popup-opened") ||
          evt.target.classList.contains("popup-add-opened")
        ) {
          formElement.classList.remove("popup-opened");
          formElementAdd.classList.remove("popup-add-opened");
        }
      });
    });
  }

  setEventListeners() {
    this._clickClosePopup();
    this._handleEscClose();

    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      profileNameInput.textContent = nameInput.value;
      profileJobInput.textContent = jobInput.value;
      this.close();
    });

    formElementAdd.addEventListener("submit", (evt) => {
      evt.preventDefault();
      addNewCard();
      resetInputCard();
      this.close();
    });

    editButton.addEventListener("click", () => {
      this.open();
      enableValidation();
    });

    addButton.addEventListener("click", () => {
      this.openPopupAdd();
      enableValidation();
    });

    closeButton.addEventListener("click", () => {
      this.close();
    });

    closeButtonAdd.addEventListener("click", () => {
      this.close();
    });
  }
}
