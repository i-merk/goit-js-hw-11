import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const formElement = document.querySelector('.search-form');
const inputElement = document.querySelector('.search-input');
const loadMoreButton = document.querySelector('.load-more');
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
      message: 'Пожалуйста, введите запрос для поиска.',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();

  try {
    const images = await fetchImages(query, currentPage);
    if (images.length === 0) {
      iziToast.info({
        title: 'Нет результатов',
        message: 'Изображения по данному запросу не найдены. Попробуйте другой запрос.',
      });
      return;
    }

    renderImages(images);
    iziToast.success({
      title: 'Успех',
      message: `Найдено ${images.length} изображений.`,
    });
    loadMoreButton.classList.remove('hidden');
  } catch (error) {
    iziToast.error({
      title: 'Ошибка',
      message: 'Произошла ошибка при поиске изображений. Пожалуйста, попробуйте позже.',
    });
  }
}

async function onLoadMoreClick() {
  currentPage += 1;

  try {
    const images = await fetchImages(currentQuery, currentPage);
    if (images.length === 0) {
      iziToast.info({
        title: 'Конец списка',
        message: 'Больше изображений по данному запросу нет.',
      });
      loadMoreButton.classList.add('hidden');
      return;
    }

    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Ошибка',
      message: 'Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте позже.',
    });
  }
}
