const API_KEY = '44654368-4937825c1744fe72f2410636e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Не удалось выполнить запрос');
  }

  const data = await response.json();
  return data.hits;
}
