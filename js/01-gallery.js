import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
// -------------------------------------------------
const gallery = document.querySelector(".gallery");
console.log(gallery);
const cardList = (acc, { preview, original, description }) => {
  return (
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  );
};

const imgMarkup = galleryItems.reduce(cardList, "");

const itemMarkup = document.querySelector(".gallery");
itemMarkup.insertAdjacentHTML("afterbegin", imgMarkup);

itemMarkup.addEventListener("click", onClickGallery);

// ------------------------------------------------
function onClickGallery(event) {
  const isImage = event.target.classList.contains("gallery__image");
  if (!isImage) return;

  event.preventDefault();

  const modal = basicLightbox.create(`
    <div class="modal">
    <img src = "${event.target.dataset.source}"/>
    </div>`);

  modal.show();

  if (event.target.nodeName === "IMG") {
    // modal.classList.add("is-open");
    window.addEventListener("keydown", onPressKeyESC);
  }

  // const modalOpn = modal.classList.contains("is-open");

  // if (isImage === modalOpn) {
  //   modal.close();
  //   window.removeEventListener("click", onClickGallery);
  // }

  function onPressKeyESC(event) {
    if (event.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }

    // function mouseEnter(event) {
    //   if (event.code === "mouseenter") {
    //     modal.close();
    //     window.removeEventListener("mouseenter", mouseEnter);
    //   }
    // }
  }
}
