import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized error occurred');
      // Redirect to login page or handle the error as needed
      // return Promise.reject('Unauthorized'); // To stop further execution
    }
    return Promise.reject(error);
  }
);

export default api;
