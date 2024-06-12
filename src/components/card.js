export const container = document.querySelector(".cards");
const imagePopupOnened = document.querySelector(".popup-img");
const imagePopup = document.querySelector(".popup-img__photo");
const titlePopup = document.querySelector(".popup-img__title");
const popupCloseButton = document.querySelector(".popup-img__icon");
export const titleInput = document.querySelector(
  ".popup-add__description-title"
);
export const urlInput = document.querySelector(".popup-add__description-link");
export const closeIcon = document.querySelector(".popup-delete__icon");

export class Card {
  constructor(
    name,
    link,
    id,
    likes,
    owner,
    cardSelector,
    openPopupConfirmation,
    closePopupConfirmation,
    handleDeleteClick,
    addlikes,
    removelikes
  ) {
    this._name = name;
    this._link = link;
    this._id = id;
    this._likes = likes;
    this._owner = owner._id;
    this._cardSelector = cardSelector;
    this._openPopupConfirmation = openPopupConfirmation;
    this._closePopupConfirmation = closePopupConfirmation;
    this._handleDeleteClick = handleDeleteClick;
    this._addlikes = addlikes;
    this._removelikes = removelikes;
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
    this._element.querySelector(".cards__icon-like_count").textContent =
      this._likes.length;

    if (this.isLiked()) {
      const likeButton = this._element.querySelector(".cards__icon-like");
      likeButton.classList.add("cards__icon-like_active");
    }

    let liked = false;
    let countLike = this._likes.length;

    const toggleLike = () => {
      this.isLiked();

      const likeButton = this._element.querySelector(".cards__icon-like");
      const likeCounter = this._element.querySelector(
        ".cards__icon-like_count"
      );

      if (liked) {
        liked = false;
        countLike--;
        likeButton.classList.remove("cards__icon-like_active");
        this._removelikes(this._id);
      } else {
        liked = true;
        countLike++;
        likeButton.classList.add("cards__icon-like_active");
        this._addlikes(this._id);
      }
      likeCounter.textContent = countLike;
    };

    this._element
      .querySelector(".cards__icon-like")
      .addEventListener("click", toggleLike);

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

    if (this.isLiked()) {
      const likeButton = this._element.querySelector(".cards__icon-like");
      likeButton.classList.add("cards__icon-like_active");
    }

    return this._element;
  }

  isLiked() {
    const myId = "456ee6ec-46f6-419a-a366-46d144a5e3b1";
    return this._likes.find((res) => res._id === myId);
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

  _trash() {
    const trashBtn = this._element.querySelector(".cards__icon-trash");
    trashBtn.addEventListener("click", (evt) => {
      this._openPopupConfirmation();
      this._handleDeleteClick(this._id, evt.target.parentElement);
    });
  }

  _setEventListeners() {
    this._trash();

    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });

    this._element
      .querySelector(".cards__icon-like")
      .addEventListener("click", () => {});

    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    closeIcon.addEventListener("click", () => {
      this._closePopupConfirmation();
    });
  }
}
