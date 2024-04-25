import* as All from "./utils.js"

const allImports = () =>{
  return All
}

 allImports()

 import Card from "./card.js";
 import Section from "./section.js"
 import { container, initialCards } from "./card.js"

 const cardItems = new Section({
  items: initialCards,
renderer: (item) => {
  const card = new Card(item.name, item.link, ".card-template");
  const cardElement = card.generateCard();

container.append(cardElement);
}
 });

cardItems.renderItems()