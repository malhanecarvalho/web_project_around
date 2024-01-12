let editButton = document.querySelector(".profile__button_icon_edit")
let formElement =  document.querySelector(".popup")
let closeButton = formElement.querySelector(".popup__icon")
let nameInput = formElement.querySelector(".popup__description-name")
let jobInput = formElement.querySelector(".popup__description-job")
let saveInput = formElement.querySelector(".popup__button_text")
let profileNameInput = document.querySelector(".profile__title")
let profileJobInput = document.querySelector(".profile__subheading")

function changeDisplayToFlex(){
formElement.classList.add("popup-opened")
nameInput.value = profileNameInput.textContent
jobInput.value = profileJobInput.textContent
}

function changeDisplayToNone(){
  formElement.classList.remove("popup-opened")
}

  editButton.addEventListener("click", changeDisplayToFlex)
  closeButton.addEventListener("click", changeDisplayToNone)

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  if (nameInput !== ""){
    profileNameInput.textContent = nameInput.value
  }

  if (nameInput !== ""){
    profileJobInput.textContent = jobInput.value
  }

  changeDisplayToNone()
}

  //let nameInput =  document.querySelector(".popup__description-name")
  //let jobInput = document.querySelector(".popup__description-job")

  saveInput.addEventListener("click", handleProfileFormSubmit)


  // Pegue os valores de cada campo do valor da propriedade correspondente

  // Selecione os elementos aos quais os valores dos campos serão inseridos

  // Insira novos valores usando a
  // propriedade textContent


