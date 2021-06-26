import axios from "axios";

export default class ForeignLanguageService {
  add(values) {
    return axios.post("http://localhost:8080/api/foreignlanguages/add", values);
  }
}