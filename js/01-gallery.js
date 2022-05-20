import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click');
function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
   <img
     class="gallery__image"
     src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}"
   />
 </a></div>`
    )
    .join('');
}
// console.log(galleryMarkup);

galleryRef.innerHTML = galleryMarkup;

function getLargeImgByClick() {}
