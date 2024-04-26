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
export const imagePopup = document.querySelector(".popup-img__photo");
export const titlePopup = document.querySelector(".popup-img__title");
export const popupCloseButton = document.querySelector(".popup-img__icon");
export const titleInput = document.querySelector(".popup-add__description-title");
export const urlInput = document.querySelector(".popup-add__description-link");

export const editButton = document.querySelector(".profile__button_icon_edit");
export const formElement = document.querySelector(".popup");
export const closeButton = formElement.querySelector(".popup__icon");
export const nameInput = formElement.querySelector(".popup__description-name");
export const jobInput = formElement.querySelector(".popup__description-job");
export const profileNameInput = document.querySelector(".profile__title");
export const profileJobInput = document.querySelector(".profile__subheading");
export const addButton = document.querySelector(".profile__button-add_icon_add");

export const formElementAdd = document.querySelector(".popup-add");
export const closeButtonAdd = formElementAdd.querySelector(".popup-add__icon");
export const createButton = formElementAdd.querySelector(".popup-add__button");
export const imagePopupOnened = document.querySelector(".popup-img");

export const firstForm = document.querySelector("#form");
export const secondForm = document.querySelector("#form-add");

export const inputTitle = document.querySelector(".popup__description-name");
export const inputJob = document.querySelector(".popup__description-job ");
export const InputTitlePlace = document.querySelector(".popup-add__description-title");
export const InputUrl = document.querySelector(".popup-add__description-link");

export const spanTitle = document.querySelector("#input-title");
export const spanJob = document.querySelector("#input-job");
export const spanPlaceTitle = document.querySelector("#input-place");
export const spanUrl = document.querySelector("#input-url");

export const firstButton = document.querySelector("#button-form");
export const secondButton = document.querySelector("#button-form-add");

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

