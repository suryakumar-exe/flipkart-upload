import React,{Component} from "react"

import { Link } from "react-router-dom"
import ProductService from "../Services/ProductService"
import './textstyle.css'
class Displayproduct extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            product:[],
            no:1
        }
    }
    componentDidMount()
    {
        ProductService.displayproduct().then(result=>{
            this.setState({
                product:result.data
            })
        })
    }
    deletepro(id)
    {
       
        ProductService.deleteproduct(id).then(result=>{
            this.setState({
                product:this.state.product.filter(pro=>pro.id!==id),
                no:1
            })
        })
    }
    updatepro(id)
    {
        this.props.history.push("/update/"+id)
    }
    render()
    {
        return(
            <div>
                <h1 style={{ color:"blue",fontFamily:"cursive",fontWeight:"bold"}}>YOUR ORDER LIST</h1>
                <hr/>
                <table class="table table-striped" style={{backgroundColor:"lightblue"}}>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>PAYMENT MODE</th>
                    <th>ORDER DATE</th>
                    <th>DELIVERY DATE</th>
                    <th>CUSTOMER NAME</th>
                    <th>EMAIL</th>
                    <th>CONTACT</th>
                    <th>ADDRESS</th>
                    <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.product.map(pro=>
                        <tr>
                        <th>{this.state.no++}</th>
                        <td>{pro.pname}</td>
                        <td>{pro.quantity}</td>
                        <td>{pro.price}</td>
                        <td>{pro.paymode}</td>
                        <td>{pro.odate}</td>
                        <td>{pro.ddate}</td>
                        <td>{pro.cname}</td>
                        <td>{pro.email}</td>
                        <td>{pro.contact}</td>
                        <td>{pro.address}</td>
                        <td><button class="btn btn-danger" onClick={()=>this.deletepro(pro.id)}>Delete</button>
                        <button class="btn btn-primary" onClick={()=>this.updatepro(pro.id)}>Update</button></td>
                    </tr>
                        )}
                </tbody>
                </table>
                <Link to="/order"><button class="btn btn-success">Order more</button></Link>
            </div>
        )
    }
}
export default Displayproduct