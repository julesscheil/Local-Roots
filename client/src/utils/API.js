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
  getMySales: function (userData) {
    return axios.post("/api/sales/me", userData);
  },
  getFavoriteSales: function (favoriteData) {
    return axios.post("/api/sales/favorites", favoriteData);
  },
  createSale: function (saleData) {
    return axios.post("/api/sales", saleData);
  },
  removeSale: function (saleData) {
    return axios.post("/api/sales/delete", saleData);
  },
  getForumPost: function () {
    return axios.get("/api/forum");
  },
  getFavorites: function (userData) {
    return axios.post("/api/favorites", userData);
  },
  newFavorite: function (favoriteData) {
    return axios.post("/api/favorites", favoriteData);
  },
  removeFavorite: function (favoriteData) {
    return axios.post("/api/favorites/delete", favoriteData);
  },
  getForSaleComment: function () {
    return axios.get("/api/sales/comment");
  },
  createSaleComment: function (commentData) {
    return axios.post("/api/sales/comment", commentData);
  },
  getForumComment: function () {
    return axios.get("/api/forum/comment");
  },
  createForumComment: function (commentData) {
    return axios.post("/api/forum/comment", commentData);
  },
  createForumPost: function (postData) {
    return axios.post("/api/forum", postData);
  },
};
