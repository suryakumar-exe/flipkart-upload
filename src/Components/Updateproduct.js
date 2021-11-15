import React,{Component} from "react"
// import { createElement } from "react"
import { Link } from "react-router-dom"
import ProductService from "../Services/ProductService";
// import EmployeeService from "../services/EmployeeService"
// import validator from "validator"

class Updateproduct extends Component
{

    constructor(props)
    {
        super(props)
        var today = new Date(),
            date = (today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear());

        var ddate = new Date(),
            date1 = ((ddate.getDate()+7) + '-' + (ddate.getMonth()+1) + '-' +  ddate.getFullYear() );
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
            date1:date1,
            id:this.props.match.params.id,
        }
        this.changedata = this.changedata.bind(this)
        this.changedata1 = this.changedata1.bind(this)
        this.validateData = this.validateData.bind(this)
    }
    componentDidMount(){
        ProductService.findById(this.state.id).then(result=>{
            this.setState({
                pname:result.data.pname,
                quantity:result.data.quantity,
                price:result.data.price,
                paymode:result.data.paymode,
                odate:result.data.date,
                ddate:result.data.date1,
                cname:result.data.cname,
                email:result.data.email,
                contact:result.data.contact,
                address:result.data.address
            })
        })
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
    if(this.state.date>this.state.date1){
        window.alert("Please give future date")
        this.props.history.push("/update/"+this.id)

    }
    else{
        let product = {
            pname:this.state.pname,
            quantity:this.state.quantity,
            price:(this.state.quantity*500),
            paymode:this.state.paymode,
            odate:this.state.date,
            ddate:this.state.date1,
            cname:this.state.cname,
            email:this.state.email,
            contact:this.state.contact,
            address:this.state.address,
            id:Number(this.state.id)
        }
        // console.log(employee)
        ProductService.updateproduct(product).then(result=>{
            window.alert("product is Updated Sucessfully")
            this.props.history.push("/display")
            })
    }
}
    render()
    {
        return( 
            <div align="center">
             
                    
                <h1>Update Page</h1>
                <hr/>
                <form style={{backgroundColor:"lightblue"}} onSubmit={this.validateData}>
                    <table>
                    <tr>
                            <td>Product ID</td>
                            <td>:</td>
                            <td><input type="text" name="id"  onChange={this.changedata} value={this.state.id} disabled/></td>
                        </tr>
                        <tr>
                            <td>Product Name</td>
                            <td>:</td>
                            <td><input type="text" name="pname" pattern="[a-zA-Z\s]+" title="Invalid Product name" onChange={this.changedata} value={this.state.pname} /></td>
                        </tr>
                        <tr>
                            <td>Product Quantity</td>
                            <td>:</td>
                            <td><input type="text" name="quantity" pattern="[0-9]+" title="Invalid Quantity" onChange={this.changedata} value={this.state.quantity}/></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>:</td>
                            <td><input type="text" name="price" pattern="[0-9.]+" title="Invalid Price"  onChange={this.changedata1} value={this.state.quantity*500}/></td>
                        </tr>
                        <tr>
                            <td>Payment Mode</td>
                            <td>:</td>
                            <td>
                                <input type="radio" id="payChoice1" name="paymode" onChange={this.changedata} value="card" required/>
                                <label for="payChoice1">card</label>&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="payChoice2" name="paymode" on onChange={this.changedata} value="cash"/>
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
                                <input type="text" name="date1" id="date1" pattern="\d{1,2}[0-31]-\d{1,2}[0-12]-\d{4}" title=" Date Not in format" placeholder="dd-mm-yyyy" onChange={this.changedata} value={this.state.date1} required/>
                            
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Customer Name</td>
                            <td>:</td>
                            <td><input type="text" name="cname" pattern="[A-Za-z\s]+" title="Invalid Customer name" onChange={this.changedata} value={this.state.cname}/></td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td>:</td>
                            <td><input type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Invalid Email" onChange={this.changedata} value={this.state.email}/></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>:</td>
                            <td><input type="text" name="contact" pattern="^[789][0-9]{9}" title="Invalid Contact Number" onChange={this.changedata} value={this.state.contact}/></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td><textarea name="address" rows="4" cols="23"  pattern="[A-Za-z\s]+" title="Invalid Address" onChange={this.changedata} value={this.state.address}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>   
                            <td>
                            <button class="btn btn-success">Update</button>
                            &nbsp;&nbsp;
                            <Link to="/back"><button class="btn btn-success">Back</button></Link>
                       
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
export default Updateproduct