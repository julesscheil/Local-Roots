import axios from "axios";

export default {
  userSignup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  userLogin: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  userLogout: function () {
    return axios.post("/api/users/logout", { withCredentials: true });
  },
  getSales: function() {
    return axios.get("/api/sales");
  },
  createSale: function(saleData) {
    return axios.post("/api/sales", saleData);
  },
  getForumPost: function() {
    return axios.get("/api/forum");
  },
  getFavorites: function() {
    return axios.get("/api/favorites");
  },
  getForSaleComment: function() {
    return axios.get("/api/sales/comment");
  },
};
