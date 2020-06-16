import axios from "axios";

export const getVillagers = () => {
  return axios.get("http://acnhapi.com/v1a/villagers/").then((response) => {
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
