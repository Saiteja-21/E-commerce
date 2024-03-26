import React, { useState } from "react";
import './Loginsignup.css'
import { Link } from "react-router-dom";

const Loginsignup = () => {
  const [value, setvalue] = useState("Login");
  const [details,setdetails]=useState({
    name:"",
    email:"",
    password:""
  })

  const handlechange=(e)=>{
    setdetails({...details,[e.target.name]:e.target.value})

  }

  const login=async()=>{ 
    const response=await fetch('https://e-commerce-2-4hp7.onrender.com/user/login',{
        method:"POST",
        headers:{
            Accept:"application/form-data",
            'Content-Type':'application/json',

        },
        body:JSON.stringify(details)
    });
    let data=await response.json(); 
    if(data.token){
        localStorage.setItem('token',data.token)
        window.location.replace('/')
        
    }
    else{
        alert(data.error)
    }


  }
  const signup=async()=>{
    const response=await fetch('https://e-commerce-2-4hp7.onrender.com/user/signup',{
        method:"POST",
        headers:{
            Accept:"application/form-data",
            'Content-Type':'application/json',

        },
        body:JSON.stringify(details)
    });
    let data=await response.json(); 
    if(data.token){
        localStorage.setItem('token',data.token)
        window.location.replace('/')
    }
    else{
        alert(data.error)
    }

  }

  return (
    <div className="loginsignup">
      <div className="container">
        <h1>{value}</h1>
        <div className="fields">
          {value === "Signup" ? (
            <input type="text" name="name" placeholder="name" value={details.name} onChange={handlechange} />
          ) : (
            <></>
          )}

          <input type="text" placeholder="email" name="email" value={details.email} onChange={handlechange}/>
          <input type="text" placeholder="password"  name="password" value={details.password} onChange={handlechange}/>
        </div>
      
        <button onClick={()=>{value==='Login'?login():signup()}}>continue</button>
      
      
        {value === "Signup" ? (
          <p>
            Already have an account?<span onClick={()=>setvalue('Login')}>Login here</span>
          </p>
        ) : (
          <p>
            Create an account?<span onClick={()=>setvalue('Signup')}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Loginsignup;
