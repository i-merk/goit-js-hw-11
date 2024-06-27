// pixabay-api.js
const API_KEY = 'твой_уникальный_ключ_API'; // Укажи свой ключ API здесь
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 20) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
    throw error;
  }
}
