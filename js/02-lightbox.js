import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// -------------------------------------------------
const gallery = document.querySelector(".gallery");
console.log(gallery);
const cardList = (acc, { preview, original, description }) => {
  return (
    acc +
    `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  );
};

const imgMarkup = galleryItems.reduce(cardList, "");

const itemMarkup = document.querySelector(".gallery");
itemMarkup.insertAdjacentHTML("afterbegin", imgMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
