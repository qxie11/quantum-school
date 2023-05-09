import axios from "axios";

axios.interceptors.response.use(
  function (res) {
    console.log(res, "res");
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
