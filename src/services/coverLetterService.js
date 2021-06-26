import axios from "axios";

export default class CoverLetterService {
  add(values) {
    return axios.post("http://localhost:8080/api/coverletters/add", values);
  }

  update(values) {
    return axios.post("http://localhost:8080/api/coverletters/update", values);
  }
}