import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            email :"",
            gender:"",  //dropdown
            age:"",
            martial:"",    //radio
            qualification :""  //checkbox
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeHandler(event){
        const { name , value , type , checked } = event.target
       type === "checkox" ? this.setState({ [name] : checked })  : this.setState({ [name] : value })
     
    }
    handleSubmit(){

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                {/* First Name*/}
                <label>Name</label> &nbsp;&nbsp;
                  <input type="text" 
                         placeholder="First Name" 
                         value={this.props.firstName} 
                         name="firstname" 
                         onChange={this.changeHandler} >
                 </input>&nbsp;
                                                                            
                  {/* Last Name*/}
                 <input type="text" 
                         placeholder="Last Name" 
                         value={this.props.lastName} 
                         name="lastname" 
                         onChange={this.changeHandler} >
                  </input>
                  <br></br>
                  
                  {/* E-Mail*/}
                  <label>E-Mail</label> &nbsp;&nbsp;
                  <input type="text" 
                         placeholder="e-mail" 
                         value={this.props.email} 
                         name="email" 
                         onChange={this.changeHandler} >
                  </input>
                  <br></br>
                  
                  {/* Gender*/}
                  <label> Gender </label> &nbsp; &nbsp; 
                  <select name="gender" value={this.state.gender} onChange={this.changeHandler}>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="others">Others</option>
                  </select>
                  <br></br>
                  

                  {/* Age*/}
                  <label>Age</label> &nbsp;&nbsp;
                  <input type="number" 
                         placeholder="age" 
                         value={this.props.age} 
                         name="age" 
                         onChange={this.changeHandler} 
                         min="16" max="100" >
                  </input>
                  <br></br>

                  {/* Martial status*/}
                  <label>Martial Status</label>&nbsp;&nbsp;
                   <input type="radio" 
                         value="Married" 
                         name="martial" 
                         onChange={this.changeHandler} 
                          >
                  </input><label>Married</label> 

                  <input type="radio" 
                         value="Unmarried"
                         name="martial" 
                         onChange={this.changeHandler} 
                         >
                  </input><label>Unmarried</label>
                  {this.state.martial}
                  <br></br>
                   
                   {/* Qualification*/}
                   <label>Qualification</label>&nbsp;&nbsp;
                   <input type="checkbox" checked 
                         value=" 10 " 
                         name="qualification" 
                         onChange={this.changeHandler} 
                          >
                  </input><label>10</label> 
            
                  <input type="checkbox" 
                         value=" 12 " 
                         name="qualification" 
                         onChange={this.changeHandler} 
                          >
                  </input><label>12</label> 

                  <input type="checkbox" 
                         value=" B-Tech " 
                         name="qualification" 
                         onChange={this.changeHandler} 
                          >
                  </input><label>B-tech</label> 
                  {this.state.qualification}
                <button>Submit</button>  
                </form>
            </div>
        );
    }
}

export default Form;