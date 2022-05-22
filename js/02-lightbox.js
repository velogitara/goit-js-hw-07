import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      item => `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
    )
    .join('');
}

galleryRef.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
// var lightbox = $('.gallery a').simpleLightbox({
//   /* options */
// });
