import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.response.use(
  function (res) {
    return res.data;
  },
);
