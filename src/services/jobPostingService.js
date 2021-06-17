import axios from "axios";

export default class JobPostingService{
    getByConfirmAndActiveTrue(){
        return axios.get("http://localhost:8080/api/jobpostings/getbyisconfirmandisactive?isActive=true&isConfirm=true")
    }

    getByConfirmFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/getbyisconfirm?isConfirm=false")
    }

    getByJobPostingIdAndConfirmFalse(jobPostingId){
        return axios.get("http://localhost:8080/api/jobpostings/getbyisconfirmandjobpostingid?isConfirm=false&jobPostingId="+jobPostingId)
    }

    getByJobPostingId(jobPostingId){
        return axios.get("http://localhost:8080/api/jobpostings/getbyjobpostingid?jobPostingId="+jobPostingId)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobpostings/add",values)
    }

    confirm(jobPostingId){
        return axios.post("http://localhost:8080/api/jobpostings/updateisconfirm?isConfirm=true&jobPostingId="+jobPostingId)
    }
}