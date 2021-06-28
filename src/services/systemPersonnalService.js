import axios from "axios";

export default class SystemPersonnalService {
  update(values) {
    return axios.put(
      "http://localhost:8080/api/systempersonnals/update",
      values
    );
  }
  getByUserId(userId) {
    return axios.get(
      "http://localhost:8080/api/systempersonnals/getbyuserid?userId=" + userId
    );
  }
}
