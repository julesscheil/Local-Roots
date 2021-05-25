import axios from "axios";

export default {
  searchBooks: function (searchTerm) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm
    );
  },
  saveBook: function (plantData) {
    return axios.post("/api/plants", plantData);
  },
  getSavedBooks: function () {
    return axios.get("api/plants");
  },
  deleteBook: function (id) {
    return axios.delete("/api/plants" + id);
  },
};
