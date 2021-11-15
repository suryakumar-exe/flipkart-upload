import axios from "axios"
class ProductService
{
    orderproduct(product)
    {
        return axios.post("http://localhost:2021/flipkart_curd/savepro",product)
    }
    displayproduct()
    {
        return axios.get("http://localhost:2021/flipkart_curd/fetchpro")
    }
    deleteproduct(id)
    {
        return axios.delete("http://localhost:2021/flipkart_curd/deletepro/"+id)
    }
    findById(id)
    {
        return axios.get("http://localhost:2021/flipkart_curd/search/"+id)
    }
    updateproduct(product)
    {
        return axios.put("http://localhost:2021/flipkart_curd/updatepro",product)
    }
}
export default new ProductService()