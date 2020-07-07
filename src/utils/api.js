import axios from "axios";

export const getInfo = (type) => {
  return axios.get(`http://acnhapi.com/v1a/${type}/`).then((response) => {
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
