const editButton = document.querySelector(".profile__button_icon_edit")
const formElement = document.querySelector(".popup")
const closeButton = formElement.querySelector(".popup__icon")
const nameInput = formElement.querySelector(".popup__description-name")
const jobInput = formElement.querySelector(".popup__description-job")
const saveInput = formElement.querySelector(".popup__button_text")
const profileNameInput = document.querySelector(".profile__title")
const profileJobInput = document.querySelector(".profile__subheading")
const addButton = document.querySelector(".profile__button-add_icon_add")
const formElementAdd = document.querySelector(".popup-add")
const closeButtonAdd = formElementAdd.querySelector(".popup-add__icon")
const titleInput = formElementAdd.querySelector(".popup-add__description-title")
const linkInput = formElementAdd.querySelector(".popup-add__description-link")
const popupForm = document.querySelector(".popup-add__form")
const createButton = formElementAdd.querySelector(".popup-add__button")
const images = document.querySelectorAll(".cards__image")
const titles = document.querySelectorAll(".cards__title")
const imagePopupOnened = document.querySelector(".popup-img")
const closeImage = document.querySelector(".popup-img")
const allCards = document.querySelector(".cards").children


function changeDisplayToFlex() {
  formElement.classList.add("popup-opened")
  nameInput.value = profileNameInput.textContent
  jobInput.value = profileJobInput.textContent
}

function changeDisplayToNone() {
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
formElement.addEventListener("submit", handleProfileFormSubmit, clickClosePopup)


function escapeKey(evt){
  if(evt.key === "Escape"){
    console.log(evt)
    changeDisplayToNone()
    openDisplayToNone()
  }
}

formElement.addEventListener("keydown", escapeKey)
formElementAdd.addEventListener("keydown", escapeKey)

function clickClosePopup(evt){
  if(evt.target.classList.contains("popup-opened") || evt.target.classList.contains("popup-add-opened") ){
    openDisplayToNone()
    changeDisplayToNone()
    console.log(evt)
     }
}
formElementAdd.addEventListener("click", clickClosePopup)
formElement.addEventListener("click", clickClosePopup)


function openDisplayToFlex() {
  formElementAdd.classList.add("popup-add-opened")
  createButton.classList.add("popup__button_inactive")
  createButton.classList.remove("popup-add__button")
  createButton.classList.remove("popup-add__button_text")
}

function openDisplayToNone() {
  formElementAdd.classList.remove("popup-add-opened")
}

addButton.addEventListener("click", openDisplayToFlex)
closeButtonAdd.addEventListener("click", openDisplayToNone)


function addButtonFormSubmit(evt, itens) {
  evt.preventDefault();
  addNewCard()
  openDisplayToNone()
}
formElementAdd.addEventListener("submit", addButtonFormSubmit)


const container = document.querySelector(".cards")
const iconAdd = document.querySelector(".profile__button-add")
const iconClose = document.querySelector(".cards__icon-trash")

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


function addCard(card) {
  const userTemplate = document.querySelector("#template").content.querySelector(".cards__container")
  const cardElement = userTemplate.cloneNode(true);
  cardElement.querySelector(".cards__title").textContent = card.name
  cardElement.querySelector(".cards__image").setAttribute("src", card.link)
  cardElement.querySelector(".cards__image").setAttribute("alt", card.name)
  cardElement.querySelector(".cards__icon-trash").addEventListener("click", (evt) => {
    evt.target.parentElement.remove()
  })
  cardElement.querySelector(".cards__icon-like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("cards__icon-like_active")

  })
  cardElement.querySelector(".cards__image").addEventListener("click", (evt)=>{
    imagePopupOnened.classList.add("popup-img-opened")
    const imagePopup = document.querySelector(".popup-img__photo")
    const titlePopup = document.querySelector(".popup-img__title")
    imagePopup.setAttribute("src", card.link)
    imagePopup.setAttribute("alt", card.name)
    titlePopup.textContent = card.name

  })

  return cardElement;
}

for (const card of initialCards) {
  const cardItem = addCard(card)
  container.append(cardItem)
}

function addNewCard() {
  const title = document.querySelector(".popup-add__description-title")
  const url = document.querySelector(".popup-add__description-link")

  const cardItem = addCard({
    name: title.value,
    link: url.value
  })

  container.prepend(cardItem)
  title.value = "";
  url.value = "";
}

function closePopupImage() {
  closeImage.classList.remove("popup-img-opened")
}
closeImage.addEventListener("click", closePopupImage)


