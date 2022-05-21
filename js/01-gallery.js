import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// import { main } from '../node_modules/basiclightbox/src/scripts/main.js';
// console.log(main);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let lightBox = basicLightbox;

galleryRef.addEventListener('click', getLargeImgByClick);

document.body.insertAdjacentHTML(
  'beforeend',
  '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>'
);
console.log(document.body);
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
    return;
  }

  const galleryEl = event.target;
  // console.log(galleryEl.dataset.source);

  lightBox.create(
    `
		<img width="1400" height="900" src="${galleryEl.dataset.source}">
	`
  );
  lightBox.show();

  galleryRef.addEventListener('keydown', closeModalByEscapeBtn);
}

function closeModalByEscapeBtn(evt) {
  if (evt.code === 'Escape') {
    return lightBox.close();
  }

  console.log(evt.code);
}
