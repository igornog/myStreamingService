import axios from 'axios';

let baseUrl = 'https://api.tvmaze.com'

export const getShows = () => {
  let response = axios.get(`${baseUrl}/shows`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getSeasons = (id: string) => {
  let response = axios.get(`${baseUrl}/shows/${id}/seasons`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getMainShowInfo = (id: string) => {
  let response = axios.get(`${baseUrl}/shows/${id}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodes = (id: string) => {
  let response = axios.get(`${baseUrl}/shows/${id}/episodes`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodeMainInfo = (id: string) => {
  let response = axios.get(`${baseUrl}/episodes/${id}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};