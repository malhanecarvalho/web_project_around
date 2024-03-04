const forms = document.querySelector("#form");
const inputs = document.querySelectorAll(".popup__input");
const spans = document.querySelectorAll(".popup__span-message");
const firstbutton = document.querySelector("#button-form");
const secondbutton = document.querySelector("#button-form-add");
const button = [firstbutton, secondbutton]

function setError(index, errorMessage) {
  inputs[index].classList.add("popup__input_type_error");
  spans[index].textContent = errorMessage;
}

function removeError(index) {
  inputs[index].classList.remove("popup__input_type_error");
  spans[index].textContent = " ";
}

function buttonDisabled(index) {
  button[index].classList.add("popup__button_inactive");
  button[index].setAttribute("disabled", true);
}

function buttonActive(index) {
  button[index].classList.remove("popup__button_inactive");
  button[index].removeAttribute("disabled", true);

}

function inputNameInvalid() {
  const inputList = Array.from(inputs);
  const inputName = 0;
  inputList.forEach((formSelector) => {
    formSelector.addEventListener("input", function (evt) {
      if (!inputList[inputName].validity.valid) {
        buttonDisabled(inputName);
        setError(inputName, inputList[inputName].validationMessage);
      } else {
        removeError(inputName);
        buttonActive(inputName);
      }
    });
  });
}

function inputJobInvalid() {
  const inputList = Array.from(inputs);
  const inputJob = 1;
  inputList.forEach((formSelector) => {
    formSelector.addEventListener("input", function (evt) {
      if (!inputList[inputJob].validity.valid) {
        setError(inputJob, inputList[inputJob].validationMessage);
      } else {
        removeError(inputJob);
      }
    });
  });
}

function inputPlaceInvalid() {
  const inputList = Array.from(inputs);
  const inputPlace = 2;
  inputList.forEach((formSelector) => {
    formSelector.addEventListener("input", function (evt) {
      if (!inputList[inputPlace].validity.valid) {
        buttonDisabled(1);
        setError(inputPlace, inputList[inputPlace].validationMessage);
      } else {
        removeError(inputPlace);
        buttonActive(1);
      }
    });
  });
}

function inputUrlInvalid() {
  const inputList = Array.from(inputs);
  const inputUrl = 3;
  inputList.forEach((formSelector) => {
    formSelector.addEventListener("input", function (evt) {
      if (!inputList[inputUrl].validity.valid) {
        buttonDisabled(1);
        setError(inputUrl, inputList[inputUrl].validationMessage);
      } else {
        removeError(inputUrl);
        buttonActive(1);
      }
    });
  });
}

const enableValidation = () => {
  const firstForm = document.querySelector("#form");
  const secondForm = document.querySelector("#form-add");
  const formList = Array.from([firstForm, secondForm]);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });
  inputNameInvalid();
  inputJobInvalid();
  inputPlaceInvalid();
  inputUrlInvalid();
};
enableValidation();
