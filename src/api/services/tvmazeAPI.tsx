import axios from 'axios';

const baseUrl = 'https://api.tvmaze.com'

export const getShows = () => {
  const response = axios.get(`${baseUrl}/shows`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getSeasons = (id: string) => {
  const idFound = id ? id : localStorage.getItem('showID')
  const response = axios.get(`${baseUrl}/shows/${idFound}/seasons`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getMainShowInfo = (id: string) => {
  const idFound = id ? id : localStorage.getItem('showID')
  const response = axios.get(`${baseUrl}/shows/${idFound}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodes = (id: string) => {
  const idFound = id ? id : localStorage.getItem('showID')
  const response = axios.get(`${baseUrl}/shows/${idFound}/episodes`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodeMainInfo = (id: string) => {
  const idFound = id ? id : localStorage.getItem('episodeId')
  const response = axios.get(`${baseUrl}/episodes/${idFound}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};