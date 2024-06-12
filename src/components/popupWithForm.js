import  Popup  from "../components/popup";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitCallback}) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__button");
  }

  _getInputValues() {
    const inputs = this._formElement.querySelectorAll(".popup__input");
    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setInputValues(values) {
    const inputs = this._formElement.querySelectorAll(".popup__input");
    inputs.forEach((input) => {
      input.value = values[input.name];
    });
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Salvando...";
    }
  }

  close() {
    super.close();
    this._formElement.reset();
    this._submitButton.textContent = "Salvar";
  }

  setEventListeners() {
    super.setEventListeners()
const forms = this._popupElement.querySelectorAll(".popup__form");
forms.forEach((item)=>{
  item.addEventListener("submit",(evt) =>{
    evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this._renderLoading(true)
      this.close();
  });
});
}
}