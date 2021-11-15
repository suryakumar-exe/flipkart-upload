import React,{Component} from "react"
// import { createElement } from "react"
import { Link } from "react-router-dom"
import ProductService from "../Services/ProductService";
// import EmployeeService from "../services/EmployeeService"
// import validator from "validator"
import './textstyle.css'
class Orderproduct extends Component
{

    constructor(props)
    {
        super(props)
        var today = new Date(),
            //date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate());
            date = (today.getDate()+ '-' + (today.getMonth()+1) + '-' +today.getFullYear() );
        var ddate = new Date(),
            date1 = (ddate.getDate()+7) + '-' + (ddate.getMonth()+1) + '-' +today.getFullYear();
        this.state={
            pname:"",
            quantity:null,
            price:null,
            paymode:"",
            odate:"",
            ddate:"",
            cname:"",
            email:"",
            contact:"",
            address:"",
            date: date,
            date1:date1
        }
        this.changedata = this.changedata.bind(this)
        this.changedata1 = this.changedata1.bind(this)
        this.validateData = this.validateData.bind(this)
    }
    changedata(event)
    {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    changedata1(event)
    {
        this.setState({
            quantity:event.target.value,
           
        })
    }

    validateData(event)
    {
    event.preventDefault();
        let product = {
            pname:this.state.pname,
            quantity:Number(this.state.quantity),
            price:(this.state.quantity*500),
            paymode:this.state.paymode,
            odate:this.state.date,
            ddate:this.state.date1,
            cname:this.state.cname,
            email:this.state.email,
            contact:this.state.contact,
            address:this.state.address
        }
        // console.log(employee)
        
        ProductService.orderproduct(product).then(result=>{
            window.alert("Your Order is Placed Sucessfully")
            this.props.history.push("/display")
            })
    }
    render()
    {
        return( 
            <body style={{ backgroundColor:"lightskyblue"}}>
            <div align="center">
               
                <h1 style={{ color:"blue",fontFamily:"cursive",fontWeight:"bold"}}>PLACE YOUR ORDER</h1>
                <hr/>
                <marquee><b>1.Discount on product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.Big Billion Sales is Live&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Special Offer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.Place order</b></marquee>
                <form style={{backgroundColor:"lightblue"}} onSubmit={this.validateData}>
                    <table>
                        <tr>
                            <td>Product Name</td>
                            <td>:</td>
                            <td><input type="text" name="pname" pattern="[a-zA-Z\s]+" title="Invalid Product name" onChange={this.changedata} required /></td>
                        </tr>
                        <tr>
                            <td>Product Quantity</td>
                            <td>:</td>
                            <td><input type="text" name="quantity" pattern="[0-9]+" title="Invalid Quantity" onChange={this.changedata} required /></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>:</td>
                            <td><input type="text" name="price" pattern="[0-9.]+" title="Invalid Price" onChange={this.changedata1} value={this.state.quantity*500} required disabled/></td><div><small>* 500 per Item</small></div>
                        </tr>
                        <tr>
                            <td>Payment Mode</td>
                            <td>:</td>
                            <td>
                                <input type="radio" id="payChoice1" name="paymode" onChange={this.changedata} value="card" required/>
                                <label for="payChoice1">card</label>&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="payChoice2" name="paymode" onChange={this.changedata} value="cash"/>
                                <label for="payChoice2">Cash</label>
                        
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Oder Date</td>
                            <td>:</td>
                            <td>
                            <div className='date'>
                            {this.state.date}
                            </div>   
                            </td>
                        </tr>
                        <tr>
                            <td>delivery date</td>
                            <td>:</td>
                            <td>
                            <div className='date'>
                            {this.state.date1}
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Customer Name</td>
                            <td>:</td>
                            <td><input type="text" name="cname" onChange={this.changedata} pattern="[A-Za-z\s]+" title="Invalid Customer name"  required /></td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td>:</td>
                            <td><input type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  title="Invalid email" onChange={this.changedata} required /></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>:</td>
                            <td><input type="text" name="contact" pattern="^[789][0-9]{9}" title="Invalid Contact Number" onChange={this.changedata} required /></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td><textarea name="address" rows="4" cols="23" pattern="[A-Za-z\s]+" title="Invalid Address" onChange={this.changedata} required /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>   
                            <td>
                            <button class="btn btn-success">Order</button>
                            &nbsp;&nbsp;
                            <Link to="/back"><button class="btn btn-success">Back</button></Link>
                       
                            </td>
                        </tr>
                    </table>
                </form>
                
            </div>
            </body>
        
        )
    }
}
export default Orderproduct