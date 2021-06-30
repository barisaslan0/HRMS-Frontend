import axios from "axios";

export default class JobPostingService {
  getByFilter(jobPostingFilters, pageNo, pageSize) {
    return axios.post(
      "http://localhost:8080/api/jobpostings/getbyfilter?pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize,
      jobPostingFilters
    );
  }

  getByConfirmAndActiveTrue(pageNo, pageSize) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getbyisconfirmandisactive?isActive=true&isConfirm=true&pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize
    );
  }

  getByConfirmFalseAndActiveTrue(pageNo, pageSize) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getbyisconfirmandisactive?isActive=true&isConfirm=false&pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize
    );
  }

  getByJobPostingIdAndConfirmFalse(jobPostingId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getbyisconfirmandjobpostingid?isConfirm=false&jobPostingId=" +
        jobPostingId
    );
  }

  getByJobPostingId(jobPostingId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getbyjobpostingid?jobPostingId=" +
        jobPostingId
    );
  }

  add(values) {
    return axios.post("http://localhost:8080/api/jobpostings/add", values);
  }

  confirm(jobPostingId) {
    return axios.post(
      "http://localhost:8080/api/jobpostings/updateisconfirm?isConfirm=true&jobPostingId=" +
        jobPostingId
    );
  }
}
