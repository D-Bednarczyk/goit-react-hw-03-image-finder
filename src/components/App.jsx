import Notiflix from 'notiflix';
const axios = require('axios').default;
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36133466-dbc0c7a3178523b048b6e9d9a';

const fetchImgs = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    if (response.data.total === 0)
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    return response;
  } catch (error) {
    console.error('Error:' + error);
  }
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
