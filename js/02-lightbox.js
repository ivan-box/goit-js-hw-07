import { galleryItems } from "./gallery-items.js";
// Change code below this line
const addImg = document.querySelector(".gallery");
addImg.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
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
  )
  .join("");
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
});
console.log(galleryItems);
