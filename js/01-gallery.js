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
console.log(galleryItems);
addImg.addEventListener("click", onModalImg);
function onModalImg(eve) {
  eve.preventDefault();
  const srcBigImages = eve.target.dataset.source;
  const instance = basicLightbox.create(`
        <img src="${srcBigImages}" width="800" height="600">
    `);

  instance.show();
}
