import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div style={{backgroundColor:"skyblue", width:"100vw", height:"100vh", display:"flex",
    justifyContent:"center", alignItems:"center"} }>
        <div style={{width:"400px", backgroundColor:"aliceblue", height:'300px', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h3 style={{color:"orangered", marginBottom:"10px"}}>{props.msg}</h3>
            <h1 style={{textAlign:"center", marginBottom:"10px"}}>Login</h1>
            <input type="text" placeholder='Enter Email' style={{width:"300px", height:"30px"}}/><br />
            <input type="Password" placeholder='Enter Password' style={{width:"300px", height:"30px"}}/><br />
            <button style={{width:"300px", height:"30px", backgroundColor:"ButtonHighlight", border:"none", cursor:"pointer"}}><Link to="/Home" style={{padding:"8px 130px"}}>Login</Link></button><br />
            <p>Don't have an account? <Link to="/Signup">Sign Up</Link> </p>
        </div>
        

    </div>
  )
}

export default Login