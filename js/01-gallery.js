import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let lightBox = null;

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
     loading="lazy"
     
   />
 </a></div>`
    )
    .join('');
}
galleryRef.innerHTML = galleryMarkup;

function getLargeImgByClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const galleryEl = event.target;

  lightBox = basicLightbox.create(
    `
		<img width="1400" height="900" src="${galleryEl.dataset.source}">
	`
  );
  lightBox.show();

  galleryRef.addEventListener('keydown', closeModalByEscapeBtn);
}
function closeModalByEscapeBtn(evt) {
  if (evt.code === 'Escape') {
    lightBox.close();
    galleryRef.removeEventListener('keydown', closeModalByEscapeBtn);
  }
}

const lazyImages = document.querySelectorAll('img[data-source]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('картинка загрузилась');
}
