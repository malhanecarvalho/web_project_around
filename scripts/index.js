
import Card from "./card.js";
import Section from "./section.js";
import Popup from "./popup.js";
import FormValidator from "./validity.js"
import { container, initialCards } from "./utils.js";

const cardItems = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, ".card-template");
    const cardElement = card.generateCard();

    container.append(cardElement);
  },
});

cardItems.renderItems();

const popups = new Popup(".popup");
popups.setEventListeners();

const popupAdd = new Popup(".popup-add");
popupAdd.setEventListeners();

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

export function enableValidation() {
  formSelector.forEach((item) => {
    const formEdit = new FormValidator(".popup", item.inputElement);
    const formElement = formEdit.inputElements();

    const formAdd = new FormValidator(".popup-add", item.inputElement);
    const formElementAdd = formAdd.inputElements();
    return formElement + formElementAdd;
  });
}