import axios from "axios";

export const getPic = () => {
  const num = Math.floor(Math.random() * 392 + 1);
  return axios
    .get(`http://acnhapi.com/v1a/villagers/${num}`)
    .then((response) => {
      return response.data.icon_uri;
    });
};

export const getInfo = (type) => {
  return axios.get(`http://acnhapi.com/v1a/${type}/`).then((response) => {
    return response.data;
  });
};

export const getInfoById = (type, id) => {
  return axios.get(`http://acnhapi.com/v1a/${type}/${id}`).then((response) => {
    return response.data;
  });
};
