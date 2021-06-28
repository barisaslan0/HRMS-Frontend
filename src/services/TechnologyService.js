import axios from "axios";

export default class TechnologyService {
  add(values) {
    return axios.post("http://localhost:8080/api/technologies/add", values);
  }

  update(values) {
    return axios.put(
      "http://localhost:8080/api/technologies/update",
      values
    );
  }

  delete(technologyId) {
    return axios.delete(
      "http://localhost:8080/api/technologies/delete?technologyId=" +
      technologyId
    );
  }
}
