import axios from "axios";

export default class AccountService{
    add(values){
        return axios.post("http://localhost:8080/api/accounts/add",values)
    }

    update(values){
        return axios.put("http://localhost:8080/api/accounts/update",values)
    }

    delete(accountId){
        return axios.delete("http://localhost:8080/api/accounts/delete?accountId="+accountId)
    }
}