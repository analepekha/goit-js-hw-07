import { galleryItems } from './gallery-items.js';
// Change code below this line
const markUpGallery = document.querySelector('.gallery')


const makeGallery = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("")
}

markUpGallery.insertAdjacentHTML('beforeend', makeGallery(galleryItems))

const backdroup = basicLightbox.create(`<img src="">`, {
  onShow: backdroup => { window.addEventListener('keydown', onEscClick); },
  onClose: backdroup => {window.removeEventListener('keydown', onEscClick);}
})

const clickOnImage = (event) => {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return 
  }
  backdroup.element().querySelector('img').src = event.target.dataset.source
  backdroup.show()
}

markUpGallery.addEventListener('click', clickOnImage)

const onEscClick = (event) => {
  if (event.key === 'Escape') {
    backdroup.close();
    return;
  }
}

console.log(galleryItems);

