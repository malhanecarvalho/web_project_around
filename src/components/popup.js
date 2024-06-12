export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupElementAdd = document.querySelector(popupSelector);
    this._popupElementEdit = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup-opened");
    this._popupElementAdd.classList.add("popup-add-opened");
    document.addEventListener("keydown", this._handleEscClose);

    if ((this._popupElementEdit.style.display = "none")) {
      this._popupElementEdit.style.display = "block";
    }
  }

  close() {
    this._popupElement.classList.remove("popup-opened");
    this._popupElementAdd.classList.remove("popup-add-opened");
    document.removeEventListener("keydown", this._handleEscClose);

    if ((this._popupElementEdit.style.display = "block")) {
      this._popupElementEdit.style.display = "none";
    }
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _clickClosePopup() {
    this._popupElement.addEventListener("click", function (evt) {
      if (
        evt.target.classList.contains("popup-opened") ||
        evt.target.classList.contains("popup-add-opened")
      ) {
        evt.target.classList.remove("popup-opened");
      }
      evt.target.classList.remove("popup-add-opened");
    });
  }

  setEventListeners() {
    const icons = this._popupElement.querySelectorAll(".popup__icon");
    icons.forEach((item) => {
      item.addEventListener("click", () => {
        this.close();
      });
      this._clickClosePopup();
    });
  }
}
