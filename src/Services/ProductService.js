import axios from "axios"
class ProductService
{
    orderproduct(product)
    {
        return axios.post("https://flipkart-app-beckend.herokuapp.com/savepro",product)
    }
    displayproduct()
    {
        return axios.get("https://flipkart-app-beckend.herokuapp.com/fetchpro")
    }
    deleteproduct(id)
    {
        return axios.delete("https://flipkart-app-beckend.herokuapp.com/deletepro/"+id)
    }
    findById(id)
    {
        return axios.get("https://flipkart-app-beckend.herokuapp.com/search/"+id)
    }
    updateproduct(product)
    {
        return axios.put("https://flipkart-app-beckend.herokuapp.com/updatepro",product)
    }
}
export default new ProductService()