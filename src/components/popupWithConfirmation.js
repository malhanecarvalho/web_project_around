import Popup  from "../components/popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback,) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);

    this._submitCallback = submitCallback;
  }

  openPopup() {
    if (this._popupElement.style.display == "none") {
      this._popupElement.style.display = "block";
    }
  }

  closePopup() {
    if (this._popupElement.style.display == "block") {
      this._popupElement.style.display = "none";
    }
  }
  setEventListeners() {
    super.setEventListeners();
    this.closePopup();

  }
}

