
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const ulRef = document.querySelector('.gallery');
function createGalleryImages(images) {
  return images
    .map(
      image => `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>`
    )
    .join('');
}

const addGalleryItems = createGalleryImages(galleryItems);

function blockStandartAction(event) {
  event.preventDefault();
}

ulRef.addEventListener('click', onImageClick);
ulRef.insertAdjacentHTML('beforeend', addGalleryItems);
function onImageClick(event) {
  blockStandartAction(event);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});

ulRef.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    instance.close();
  }
});
