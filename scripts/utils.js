import {addNewCard, resetInputCard} from "./card.js";
import enableValidation from "./validity.js";

(function () {

const editButton = document.querySelector(".profile__button_icon_edit");
const formElement = document.querySelector(".popup");
const closeButton = formElement.querySelector(".popup__icon");
const nameInput = formElement.querySelector(".popup__description-name");
const jobInput = formElement.querySelector(".popup__description-job");
const profileNameInput = document.querySelector(".profile__title");
const profileJobInput = document.querySelector(".profile__subheading");
const addButton = document.querySelector(".profile__button-add_icon_add");
const formElementAdd = document.querySelector(".popup-add");
const closeButtonAdd = formElementAdd.querySelector(".popup-add__icon");
const createButton = formElementAdd.querySelector(".popup-add__button");
const imagePopupOnened = document.querySelector(".popup-img");

function changeDisplayToFlex() {
  formElement.classList.add("popup-opened");
  nameInput.value = profileNameInput.textContent;
  jobInput.value = profileJobInput.textContent;
}

function changeDisplayToNone() {
  formElement.classList.remove("popup-opened");
}

editButton.addEventListener("click", changeDisplayToFlex, enableValidation());
closeButton.addEventListener("click", changeDisplayToNone);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameInput.textContent = nameInput.value;
  profileJobInput.textContent = jobInput.value;
  changeDisplayToNone();
}
formElement.addEventListener("submit", handleProfileFormSubmit);

function escapeKey(evt) {
  if (evt.key === "Escape") {
    changeDisplayToNone();
    openDisplayToNone();
    imagePopupOnened.classList.remove("popup-img-opened");
  }
}
document.addEventListener("keydown", escapeKey, true);
document.removeEventListener("keydown", escapeKey, false);

function clickClosePopup(evt) {
  if (
    evt.target.classList.contains("popup-opened") ||
    evt.target.classList.contains("popup-add-opened")
  ) {
    openDisplayToNone();
    changeDisplayToNone();
  }
}
formElementAdd.addEventListener("click", clickClosePopup);
formElement.addEventListener("click", clickClosePopup);

function openDisplayToFlex() {
  formElementAdd.classList.add("popup-add-opened");
  createButton.classList.add("popup__button_inactive");
  createButton.classList.remove("popup-add__button");
}

function openDisplayToNone() {
  formElementAdd.classList.remove("popup-add-opened");
}

addButton.addEventListener("click", openDisplayToFlex, enableValidation());
closeButtonAdd.addEventListener("click", openDisplayToNone);

function addButtonFormSubmit(evt, itens) {
  evt.preventDefault();
  addNewCard();
  resetInputCard()
  openDisplayToNone();

}
formElementAdd.addEventListener("submit", addButtonFormSubmit);

})();