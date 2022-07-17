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

const clickOnImage = (event) => {
    event.preventDefault()
    if (event.target.classList.contains('gallery__link')) {
    return
    }
    const backdroup = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`)
   
    backdroup.show(() => window.addEventListener('keydown', onKeyPress))
    
    const onKeyPress = (event) => {
    if (event.key === 'Escape') {
        backdroup.close(() => window.removeEventListener('keydown', onKeyPress));
        return;
    }
    return;
};
}    

markUpGallery.addEventListener('click', clickOnImage)

console.log(galleryItems);


