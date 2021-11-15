import React,{Component} from "react"
import { Link } from "react-router-dom"


class Home extends Component
{
    render()
    {
        return(
            <div>
                <h1 style={{ color:"blue",fontFamily:"cursive",fontWeight:"bold"}}>WELCOME TO FLIPKART</h1>
                <hr/>
                <Link to="/order"><button class="btn btn-outline-success">Order Product</button></Link> &nbsp;&nbsp;
                <Link to="/display"><button class="btn btn-outline-success">Display Order List</button></Link>
            </div>
        )
    }
}
export default Home