import axios from "axios";

export default class TechnologyService {
  add(values) {
    return axios.post("http://localhost:8080/api/technologies/add", values);
  }
}