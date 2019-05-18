import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName :"",
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

    changeHandler = async function(e){
        e.preventDefault();
        const { name , value   } = e.target
         await this.setState({ 
            [name] : value 
        })
       // type === "checkbox" || "radio" ? this.setState({ [name] : checked })  : this.setState({ [name] : value })
     
    }

    handleSubmit(e){
      e.preventDefault();
      console.log("Congratulation you have submitted" , this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmti}>

                {/* First Name*/}
                <label>Last Name</label> &nbsp;&nbsp;
                  <input type="text" 
                         placeholder="First Name" 
                         value={this.state.firstName} 
                         name="firstName" 
                         onChange={ this.changeHandler} >
                 </input>&nbsp;
                 <br></br>
                                                                            
                  {/* Last Name*/}
                  <label>Last Name</label> &nbsp;&nbsp;
                 <input type="text" 
                         placeholder="Last Name" 
                         value={this.state.lastName} 
                         name="lastName" 
                         onChange={this.changeHandler} >
                  </input>
                  <br></br>
                  
                  {/* E-Mail*/}
                  <label>E-Mail</label> &nbsp;&nbsp;
                  <input type="text" 
                         placeholder="e-mail" 
                         value={this.state.email} 
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
                         value={this.state.age} 
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
                         checked ={this.state.martial === "Married"} 
                         onChange={this.changeHandler} 
                          >
                  </input><label>Married</label> 

                  <input type="radio" 
                         value="Unmarried"
                         name="martial" 
                         checked ={this.state.martial === "Unmarried"} 
                         onChange={this.changeHandler} 
                         >
                  </input><label>Unmarried</label>
                  
                  <br></br>
                   
                   {/* Qualification Radio Checkbox */} 
                   <label>Qualification</label>&nbsp;&nbsp;
                   <input type="checkbox" 
                        checked ={this.state.qualification === 10}
                         value=" 10 " 
                         name="qualification" 
                         onChange={this.changeHandler} 
                          >
                  </input><label>10</label> 
            
                  <input type="checkbox" 
                         value=" 12 " 
                         name="qualification" 
                         checked ={this.state.qualification === 12}
                         onChange={this.changeHandler} 
                          >
                  </input><label>12</label> 

                  <input type="checkbox" 
                         value=" B-Tech " 
                         name="qualification" 
                         checked ={this.state.qualification === "B-Tech"}
                         onChange={this.changeHandler} 
                          >
                  </input><label>B-tech</label> 
                  
                <button onClick ={ event => this.handleSubmit(event)}>Submit</button>  
                </form>
            </div>
        );
    }
}

export default Form;