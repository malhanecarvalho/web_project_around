let editButton = document.querySelector(".profile__button_icon_edit")
let formElement =  document.querySelector(".popup")
let closeButton = formElement.querySelector(".popup__icon")
let nameInput = formElement.querySelector(".popup__description-name")
let jobInput = formElement.querySelector(".popup__description-job")
let saveInput = formElement.querySelector(".popup__button_text")
let profileNameInput = document.querySelector(".profile__title")
let profileJobInput = document.querySelector(".profile__subheading")
let elementOverlay = document.querySelector(".content")

function changeDisplayToFlex(){
formElement.classList.add("popup-opened")
nameInput.value = profileNameInput.textContent
jobInput.value = profileJobInput.textContent
elementOverlay.classList.add("content-overlay")
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

  if ( saveInput !== ""){
    profileNameInput.textContent = nameInput.value
  }

  changeDisplayToNone()
}
  saveInput.addEventListener("submit", handleProfileFormSubmit)




