import axios from "axios";

export const getVillagers = () => {
  return axios.get("http://acnhapi.com/v1/villagers/").then((response) => {
    return Object.values(response.data);
  });
};
