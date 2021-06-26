import axios from "axios";

export default class WorkExperienceService {
  add(values) {
    return axios.post("http://localhost:8080/api/workexperiences/add", values);
  }
}
