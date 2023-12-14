import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Create() {
  
  const history = useNavigate();
  const header ={"ACESS":"*"}
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const handelSubmit = (e)=>
  { e.preventDefault();
    axios.post('https://65794a92f08799dc8046999d.mockapi.io/crud',
    {name:name, email:email,
    header,})
    history("./read")
  }

  return (
  
 <div className="container-sm text-start">
    <h3 className="card-title">Create</h3>
   <form>
    <div className="mb-3 text-">
      <label forHtml="exampleInputPassword1" className="form-label">Name</label>
      <input type="name" className="form-control" id="exampleInputPassword1" onChange={(e)=> setName(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label forHtml="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)} />
    </div>
    
    
    <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
  </form>
</div>
   
  )
}
