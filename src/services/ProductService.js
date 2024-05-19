import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService{
    saveProduct(product){
        return axios.post(API_BASE_URL, product);
    }

    getProducts(){
        return axios.get(API_BASE_URL);
    }
}
export default new ProductService();