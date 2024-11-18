import React,{useState} from 'react'
import "../App.css"
import "../Responsive.css"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";



const Signup = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const navigate=useNavigate()
  



  const handleSubmit=(e)=>{
    e.preventDefault()
    // validation for input form in the sign up page
    if(name.trim()==="" || email.trim()==="" || password.trim()==="" || confirmPassword.trim()===""){
      alert("please fill all the input fields")
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      return
    }
    console.log(name,email,password,confirmPassword)

    // logic for taking the userData from localStorage and pushing it into the localStorage


    if(password===confirmPassword){
      let userData={name,email,password}
    
      console.log(userData)
    
      const existingUserData=JSON.parse(localStorage.getItem("userData")) || []
      existingUserData.push(userData)
      localStorage.setItem("userData",JSON.stringify(existingUserData))
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      navigate("/login")

    }else{
      alert("password and confirm password does not match")
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }
   

  }






  return (
    <div className='login'>
       <div className="header">
            
            <div className="overlay">
                <img src="/Assests/shape.jpg" className='overlay_img' alt="background  shape" />
            </div>
        </div>


        <div className="login_nav">
          <h1 id='login_nav_heading'>Welcome OnBoard!</h1>
          <p id='login_nav_para'>Let’s help you to meet your tasks</p>

        </div>

        <div className="login_section">
         
          <form  onSubmit={handleSubmit} className='login_form'>
            <input type='text ' value={name} onChange={(e)=>setName(e.target.value)} className='login_form_input'   placeholder='Enter your full name' />
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='login_form_input' placeholder='Enter your email' />
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='login_form_input' placeholder='Enter password' />
            <input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='login_form_input' placeholder='Confirm password' />
            <button className='btn'>Register</button>
          </form>
        </div>
     
    <div className="btn_contaner">
           
           
            <div className="login_navigation">
              
              <p>Already have an account ? </p>
              <span><Link to="/login">sign in</Link></span>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
