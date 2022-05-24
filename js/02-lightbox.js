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

// const handleClick = e => {
//   e.preventDefault();

//   // if (e.target.nodeName !== 'IMG') {
//   //   return;
//   // }
// };
// gallery.addEventListener('click', handleClick);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
// var lightbox = $('.gallery a').simpleLightbox({
//   /* options */
// });
