import React from 'react'
import './signin.style.scss'
class  SignIn extends React.Component{
    constructor(){
        super()
        this.state={
             email:'',
            password:''
        }
    }
    handleChange= (event)=>{
     const {name,value}=event.target
    this.setState({[name]:value})
    }
    handleSubmit = (event )=>{
        event.preventDefault()
    }
    render(){
        return(
            <>
             <div className="sign-in">
             
                 <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>
                 <form onSubmit={this.handleSubmit}>
                   <input
                     name='email'
                     placeholder='email'
                     type='email'
                     handleChange={this.handleEmail}
                   />
                    <input
                     name='password'
                     placeholder='password'
                     type='password'
                     handleChange={this.handlePassword}
                   />
                   <input
                    type='submit'
                    value='submit form'
                   />
   
                 </form>
               </div>
   
             
           </>
       )
    }
}
export default SignIn