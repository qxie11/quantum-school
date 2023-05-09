import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const baseUrlInstance = axios.create({
  baseURL: process.env.BASE_URL,
});
