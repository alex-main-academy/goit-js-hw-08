// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryMainEl = document.querySelector('.gallery');
let renderHtmlMarkup = '';

// render photos from array to page
function renderPhotosOnPage() {
  galleryItems.map(elem => {
    renderHtmlMarkup += `
        <a class="gallery__item" href="${elem.original}">
            <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" title="${elem.description}"/>
        </a>
        `;
  });
}
renderPhotosOnPage();
galleryMainEl.innerHTML = renderHtmlMarkup;

const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
