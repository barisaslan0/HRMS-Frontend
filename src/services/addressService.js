import axios from "axios";

export default class AddressService{
    add(values){
        return axios.post("http://localhost:8080/api/addresses/add",values)
    }

    update(values){
        return axios.put("http://localhost:8080/api/addresses/update",values)
    }

    delete(addressId){
        return axios.delete("http://localhost:8080/api/addresses/delete?addressId="+addressId)
    }
}