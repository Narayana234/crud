import {Component} from "react"

class Login extends Component{
render(){
    return(
        <form onSubmit={this.storedData}>
            <h1> LOGIN PAGE</h1>
            <label for="name"> Name</label>
            <input type="text" id="name" placeholder = "Enter your Name" onChange = {(event) =>(this.setState({name:event.target.value}))}/>
           <label for="email"> Email</label>
           <input type="email" id="email" onChange = {(event) =>(this.setState({email:event.target.value}))}/>
           <input type="submit"/>
             </form>
        
    )
}
}


export default Login