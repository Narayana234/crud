import {React,Component,} from "react"

import {Link} from "react-router-dom"



import axios from "axios"

class SignUp extends Component{
state = {
    name : "xx",
    email: "yyy"
}

storedData = (event) =>{
    const {name,email} = this.state;
    const obj = {
        name,
        email
    }
   console.log(obj)
   const url = "http://localhost:5001/students/create-student";

   axios.post(url,obj).then((res) =>{
    if(res.status === 200){
        alert("Students inserted successfully")
    }
    else{
        Promise.reject()
    }
   })
   .catch((err) =>{
    alert(err)
   })
   event.preventDefault();
}
render(){
    return(
        <div>

         <form onSubmit={this.storedData}>
            <label for="name"> Name</label>
            <input type="text" id="name" placeholder = "Enter your Name" onChange = {(event) =>(this.setState({name:event.target.value}))}/>
           <label for="email"> Email</label>
           <input type="email" id="email" onChange = {(event) =>(this.setState({email:event.target.value}))}/>
           <input type="submit"/>
             </form>
             <Link to ="/login"> HI </Link>
        </div>
        
        
    )
}
}


export default SignUp