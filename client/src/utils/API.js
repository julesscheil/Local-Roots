import axios from "axios";

export default {
  checkLogin: function (sessionData) {
    return axios.post("/api/users/session", sessionData);
  },
  userSignup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  userLogin: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  userLogout: function () {
    return axios.post("/api/users/logout", { withCredentials: true });
  },
  getSales: function () {
    return axios.get("/api/sales");
  },
  createSale: function (saleData) {
    return axios.post("/api/sales", saleData);
  },
  getForumPost: function () {
    return axios.get("/api/forum");
  },
  getFavorites: function () {
    return axios.get("/api/favorites");
  },
  newFavorite: function (favoriteData) {
    return axios.post("api/favorites", favoriteData);
  },
  getForSaleComment: function() {
    return axios.get("/api/sales/comment");
  },
  createSaleComment: function(commentData) {
    return axios.post("/api/sales/comment", commentData);
  },
  getForumComment: function() {
    return axios.get("/api/forum/comment");
  },
  createForumComment: function(commentData) {
    return axios.post("/api/forum/comment", commentData);
  },
};
