import "./index.css";

import Section from "../components/section.js";
import PopupWithForm from "../components/popupWithForm.js";
import PopupWithConfirmation from "../components/popupWithConfirmation.js";
import PopupWithImage from "../components/popupWithImage.js";
import { FormValidator, formSelector } from "../components/validity.js";
import { Card, container, titleInput, urlInput } from "../components/card.js";
import { UserInfo } from "../components/userinfo.js";
import Api from "../components/Api.js";
import {
  nameInput,
  jobInput,
  selectors,
  editButton,
  addButton,
  btnConfirm,
  iconEdit,
  profileImg,
} from "../components/utils.js";

const clientApi = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_09",
  token: "456ee6ec-46f6-419a-a366-46d144a5e3b1",
});

clientApi
  .getUser()
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .then((user) => {
    return user;
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const userInfo = new UserInfo(selectors);
clientApi
  .getUserMe()
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo(name, about, avatar);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  enableValidation,
  submitCallback: ({ name, about }) => {
    clientApi.userEdit(name, about).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
    const { avatar } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, avatar);
  },
});
popupProfile.setEventListeners();

editButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;
  popupProfile.open(enableValidation());
});

function createNewCard() {
  const popupAddForm = new PopupWithForm({
    popupSelector: ".popup-add",
    submitCallback: () => {
      const cardData = {
        name: titleInput.value,
        link: urlInput.value,
      };

      clientApi
        .createCard(cardData)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })

        .then((item) => {
          const card = new Card(
            item.name,
            item.link,
            item._id,
            item.likes,
            item.owner,
            ".card-template",
            openPopupConfirmation,
            closePopupConfirmation,
            submitPopupConfirmation,
            addLike,
            removeLike
          );
          const cardElement = card.generateCard();
          container.prepend(cardElement);
        });
    },
  });

  popupAddForm.setEventListeners();

  addButton.addEventListener("click", () => {
    popupAddForm.open();
  });
}
createNewCard();

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup-edit",
  submitCallback: ({ image }) => {
    clientApi.editAvatar({
      avatar: document.querySelector(".popup-edit__description-link").value,
    });
    const { name, about } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, image);
  },
});

popupEditAvatar.setEventListeners();

iconEdit.addEventListener("click", () => {
  popupEditAvatar.open(enableValidation());
});

profileImg.addEventListener("mouseover", function (evt) {
  if ((iconEdit.style.display = "none")) {
    iconEdit.style.display = "block";
  }
});

profileImg.addEventListener("mouseout", function (evt) {
  if ((iconEdit.style.display = "block")) {
    iconEdit.style.display = "none";
  }
});

const renderCards = () => {
  clientApi
    .getInitialCards()
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((cards) => {
      return cards;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  clientApi
    .getInitialCards()
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })

    .then((result) => {
      const defaultCardList = new Section({
        items: result,
        renderer: (item) => {
          const card = new Card(
            item.name,
            item.link,
            item._id,
            item.likes,
            item.owner,
            ".card-template",
            openPopupConfirmation,
            closePopupConfirmation,
            submitPopupConfirmation,
            addLike,
            removeLike
          );
          const cardElement = card.generateCard();
          container.append(cardElement);
        },
      });
      defaultCardList.renderItems();
    })
    .catch((err) => {
      console.log(err);
    });
};
renderCards();

export const enableValidation = () => {
  const forms = new Section({
    items: formSelector,
    renderer: (item) => {
      const form = new FormValidator(".popup", item.inputElement);
      const formElement = form.inputElements();

      const formAdd = new FormValidator(".popup-add", item.inputElement);
      const formElementAdd = formAdd.inputElements();

      const formEdit = new FormValidator(".popup-edit", item.inputElement);
      const formElementEdit = formEdit.inputElements();

      return formElement + formElementAdd + formElementEdit;
    },
  });

  forms.renderItems();
};

export function openPopupConfirmation() {
  const popup = new PopupWithConfirmation(".popup-delete");
  popup.openPopup();
  enableValidation();
}

export function closePopupConfirmation() {
  const popupClose = new PopupWithConfirmation(".popup-delete");
  popupClose.closePopup();
}

export function submitPopupConfirmation(id, li) {
  const deleteCard = new PopupWithConfirmation(".popup-delete");

  btnConfirm.addEventListener("click", () => {
    deleteCard.setEventListeners();
    clientApi.deleteCard(id).then(() => {
      li.remove();
    });
    deleteCard.closePopup();
  });
}

function addLike(id) {
  clientApi
    .addLikes(id)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then(() => {});
}

function removeLike(id) {
  clientApi
    .removeLikes(id)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then(() => {});
}


