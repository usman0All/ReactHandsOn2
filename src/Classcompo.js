import { Component } from "react"
import './style.css';
class Classcompo extends Component{
    state = {
        Name : " ",
        EmpData : [],
        Dept : " ",
        Rating : " "
    }
    changeHandle=(event)=>{
        this.setState({[event.target.name]: event.target.value})
        this.setState({[event.target.dept]: event.target.value})
        this.setState({[event.target.Rating]: event.target.value})
    }
    clickHandle=()=>{
        let newObj = {
            name : this.state.Name,
            dept : this.state.Dept,
            Rating : this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData : this.state.EmpData} )
        console.log(this.state.EmpData);
        this.state.Name=""
        this.state.Dept=""
        this.state.Rating=""
    }
 render(){
        return(
            <>
            <from id="form">           
            <label htmlFor="name" className="name">Name : </label>
            <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required /><br/><br/>
            <label htmlFor="dept" className="dept">Department : </label>
            <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandle} required /><br/><br/>
            <label htmlFor="Rating" className="rate">Rating : </label>
            <input id="Rating" type="Rating" placeholder="Enter Rating" name="Rating" value={this.state.Rating} onChange={this.changeHandle} required />
            <br/> <br/>
            <button type="button " onClick={this.clickHandle} className="btn"> SUBMIT</button>
            </from>
            <div className="text-cont">
            {this.state.EmpData.map((item,index)=>{
                return(
                  
                    <span className="child">Name: {item.name} || Dept : {item.dept} || Rating : {item.Rating}</span>
                    
                     )
            })}
            </div>
             </>
        )
    }
}
export default Classcompo