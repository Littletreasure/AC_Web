import axios from "axios";

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
