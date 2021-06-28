import axios from "axios";

export default class FavoriteService {
  add(values) {
    return axios.post("http://localhost:8080/api/favorites/add", values);
  }

  delete(favoriteId) {
    return axios.delete(
      "http://localhost:8080/api/favorites/delete?favoriteId=" + favoriteId
    );
  }

  getByJobseekerId(jobseekerId) {
    return axios.get(
      "http://localhost:8080/api/favorites/getbyjobseekerid?jobseekerId=" +
        jobseekerId
    );
  }
}
