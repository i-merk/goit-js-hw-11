// main.js

import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formElement = document.querySelector('.search-form');
const inputElement = document.querySelector('.search-input');
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector('.loader');
let currentPage = 1;
let currentQuery = '';

formElement.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();
  const query = inputElement.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Ошибка',
      message: 'Search images',
    });
    return;
  }

  currentQuery = query;
  currentPage = currentQuery = query;
  currentPage = 1;
  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query, currentPage);
    if (images.length === 0) {
      iziToast.info({
        title: 'Нет результатов',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderImages(images);
    iziToast.success({
      title: 'Успех',
      message: `Найдено ${images.length} изображений.`,
    });
  } finally {
    hideLoader();
  }

  function showLoader() {
    loader.classList.remove('hidden');
  }

  function hideLoader() {
    loader.classList.add('hidden');
  }
}
