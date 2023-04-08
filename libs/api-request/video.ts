import axios from "axios";

const URL = `https://dummyjson.com/api`;
const videoAPI = {
  get: async (id?: string) => {
    if (id) {
      return axios.get(`${URL}/video/${id}`);
    }

    return axios.get(`${URL}/video`);
  },
};
