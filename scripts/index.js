import Section from "./section.js";
import PopupWithForm from "./popup.js";
import { FormValidator, formSelector } from "./validity.js";
import { Card, container, initialCards, titleInput, urlInput } from "./card.js";
import { UserInfo, users } from "./userinfo.js";

const cardItems = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, ".card-template");
    const cardElement = card.generateCard();

    container.append(cardElement);
  },
});

cardItems.renderItems();

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

const popups = new PopupWithForm(".popup");
popups.setEventListeners();

const popupAdd = new PopupWithForm(".popup-add");
popupAdd.setEventListeners();

export const enableValidation = () => {
  const forms = new Section({
    items: formSelector,
    renderer: (item) => {
      const formEdit = new FormValidator(".popup", item.inputElement);
      const formElement = formEdit.inputElements();

      const formAdd = new FormValidator(".popup-add", item.inputElement);
      const formElementAdd = formAdd.inputElements();
      return formElement + formElementAdd;
    },
  });

  forms.renderItems();
};

export const renderUser = () => {
  const user = new Section({
    items: users,
    renderer: (item) => {
      const userForm = new UserInfo(item.name, item.job);
      const userElement = userForm.setUserInfo();

      return userElement;
    },
  });

  user.renderItems();
};
