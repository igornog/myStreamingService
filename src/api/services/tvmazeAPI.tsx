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
  let idFound = id ? id : localStorage.getItem('showID')
  let response = axios.get(`${baseUrl}/shows/${idFound}/seasons`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getMainShowInfo = (id: string) => {
  let idFound = id ? id : localStorage.getItem('showID')
  let response = axios.get(`${baseUrl}/shows/${idFound}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodes = (id: string) => {
  let idFound = id ? id : localStorage.getItem('showID')
  let response = axios.get(`${baseUrl}/shows/${idFound}/episodes`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};

export const getEpisodeMainInfo = (id: string) => {
  let idFound = id ? id : localStorage.getItem('episodeId')
  let response = axios.get(`${baseUrl}/episodes/${idFound}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });

  return response;
};