const editButton = document.querySelector(".profile__button_icon_edit")
const formElement =  document.querySelector(".popup")
const closeButton = formElement.querySelector(".popup__icon")
const nameInput = formElement.querySelector(".popup__description-name")
const jobInput = formElement.querySelector(".popup__description-job")
const saveInput = formElement.querySelector(".popup__button_text")
const profileNameInput = document.querySelector(".profile__title")
const profileJobInput = document.querySelector(".profile__subheading")
const elementOverlay = document.querySelector(".content")

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
  profileNameInput.textContent = nameInput.value
  profileJobInput.textContent = jobInput.value
  changeDisplayToNone()
}
  formElement.addEventListener("submit", handleProfileFormSubmit)





