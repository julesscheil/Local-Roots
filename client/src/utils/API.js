import axios from "axios";

export default {
  userSignup: function (userData) {
    return axios.post("/api/users", userData);
  },
  userLogin: function (userData) {
    return axios.post("/api/users", userData);
  }
};
