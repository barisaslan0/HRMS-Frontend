import axios from "axios";

export default class WorkExperienceService {
  add(values) {
    return axios.post("http://localhost:8080/api/workexperiences/add", values);
  }

  update(values) {
    return axios.put(
      "http://localhost:8080/api/workexperiences/update",
      values
    );
  }

  delete(workExperienceId) {
    return axios.delete(
      "http://localhost:8080/api/workexperiences/delete?workExperienceId=" +
        workExperienceId
    );
  }
}
