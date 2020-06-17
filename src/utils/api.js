import axios from "axios";

export const getVillagers = () => {
  return axios.get("http://acnhapi.com/v1a/villagers/").then((response) => {
    return response.data;
  });
};

export const getVillagerById = (id) => {
  return axios
    .get(`http://acnhapi.com/v1a/villagers/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const getFossils = () => {
  return axios.get("http://acnhapi.com/v1a/fossils/").then((response) => {
    return response.data;
  });
};

export const getSongs = () => {
  return axios.get("http://acnhapi.com/v1a/songs/").then((response) => {
    return response.data;
  });
};

export const getArt = () => {
  return axios.get("http://acnhapi.com/v1a/art/").then((response) => {
    return response.data;
  });
};

export const getFish = () => {
  return axios.get("http://acnhapi.com/v1a/fish/").then((response) => {
    return response.data;
  });
};

export const getInsects = () => {
  return axios.get("http://acnhapi.com/v1a/bugs/").then((response) => {
    return response.data;
  });
};
