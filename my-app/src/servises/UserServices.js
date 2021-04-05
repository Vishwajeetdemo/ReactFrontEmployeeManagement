import axios from 'axios';
const USER_REST_API_URL ='http://localhost:7070/api/FindAll';

class UserServices {

    findProduct(){
        return axios.get(USER_REST_API_URL);
    }
     
    addPro(FindAll){
        return axios.post(USER_REST_API_URL, FindAll);
    }
 
    findByIdPro(productId){
        return axios.get(USER_REST_API_URL + '/' +productId);
    }

    updateProduct(produ, productId){
        return axios.put(USER_REST_API_URL + '/' + productId, produ);
    }

}
export default new UserServices();