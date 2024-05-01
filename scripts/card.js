export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

export const container = document.querySelector(".cards");
const imagePopupOnened = document.querySelector(".popup-img");
const imagePopup = document.querySelector(".popup-img__photo");
const titlePopup = document.querySelector(".popup-img__title");
const popupCloseButton = document.querySelector(".popup-img__icon");
export const titleInput = document.querySelector(".popup-add__description-title");
export const urlInput = document.querySelector(".popup-add__description-link");

export class Card {
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
const renderElements = () => {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, ".card-template");
    const cardElement = card.generateCard();

    container.append(cardElement);
  });
};
renderElements();

const addNewCard = () => {
  const card = new Card(titleInput.value, urlInput.value, ".card-template");
  const cardElement = card.newCard();

  container.prepend(cardElement);
};

const resetInputCard = () => {
  titleInput.value = " ";
  urlInput.value = " ";
};

export { addNewCard, resetInputCard };*/