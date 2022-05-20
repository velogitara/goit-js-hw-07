import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', getLargeImgByClick);

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

function getLargeImgByClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
  }

  console.log(event.target);
  console.log(event.currentTarget);
  const galleryEl = event.target;
  console.log(galleryEl.dataset.source);
}
