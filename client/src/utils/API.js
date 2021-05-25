import axios from "axios";

export default {
  userSignup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  userLogin: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  userLogout: function () {
    return axios.post("/api/users/logout");
  }
};
