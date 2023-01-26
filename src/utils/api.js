import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': '1ec978700dmshc77b12ca24c7417p17b47fjsnd68f9beb9a5b',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
