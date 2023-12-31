import axios from 'axios';

const API_KEY =
  'live_dr2XvSppj5H2JReBAkEQw0jmlHgQrHoVBPUNZt2mqGPLPYjE7JnBCT19x58KHIf6';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  try {
    const response = await axios.get(`${BASE_URL}/breeds`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
