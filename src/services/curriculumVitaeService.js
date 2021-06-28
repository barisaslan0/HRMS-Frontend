import axios from "axios";

export default class CurriculumVitaeService{
    getByJobseekerId(jobseekerId){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getbyjobseekerid?jobseekerId="+jobseekerId)
    }

    getByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getbycurriculumvitaeid?curriculumVitaeId="+curriculumVitaeId)
    }

    add(values){
        return axios.post("http://localhost:8080/api/curriculumvitaes/add",values)
    }

    delete(curriculumVitaeId){
        return axios.delete("http://localhost:8080/api/curriculumvitaes/delete?curriculumVitaeId="+curriculumVitaeId)
    }
}