import axios from "axios";

export default class JobPostingService{
    getJobPostingsConfirmAndActiveTrue(){
        return axios.get("http://localhost:8080/api/jobpostings/getbyisconfirmandisactive?isActive=true&isConfirm=true")
    }

    getJobPostingsConfirmFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/getbyisconfirm?isConfirm=false")
    }

    getByJobPostingId(jobPostingId){
        return axios.get("http://localhost:8080/api/jobpostings/getbyjobpostingid?jobPostingId="+jobPostingId)
    }

    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobpostings/add",values)
    }

    confirmJobPosting(jobPostingId){
        return axios.post("http://localhost:8080/api/jobpostings/updateisconfirm?isConfirm=true&jobPostingId="+jobPostingId)
    }
}