import { initialCards, container, imagePopupOnened, imagePopup, titlePopup, popupCloseButton, titleInput, urlInput } from "./utils";

 export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const userTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__container");
    const cardElement = userTemplate.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".cards__title").textContent = this._name;
    this._element
      .querySelector(".cards__image")
      .setAttribute("src", this._link);
    this._element
      .querySelector(".cards__image")
      .setAttribute("alt", this._name);

    return this._element;
  }

  newCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".cards__title").textContent = titleInput.value;
    this._element
      .querySelector(".cards__image")
      .setAttribute("src", urlInput.value);
    this._element
      .querySelector(".cards__image")
      .setAttribute("alt", titleInput.value);

    return this._element;
  }

  _handleOpenPopup() {
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    titlePopup.textContent = this._name;
    imagePopupOnened.classList.add("popup-img-opened");
  }

  _handleClosePopup() {
    imagePopup.src = " ";
    titlePopup.textContent = " ";
    imagePopupOnened.classList.remove("popup-img-opened");
  }

  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });

    this._element
      .querySelector(".cards__icon-like")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("cards__icon-like_active");
      });

    this._element
      .querySelector(".cards__icon-trash")
      .addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
      });

    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}
/*
const addNewCard = () => {
  const card = new Card(titleInput.value, urlInput.value, ".card-template");
  const cardElement = card.newCard();

  container.prepend(cardElement);
};

const resetInputCard = () => {
  titleInput.value = " ";
  urlInput.value = " ";
};

export { addNewCard, resetInputCard };
*/