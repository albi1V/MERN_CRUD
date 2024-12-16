import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
  const[name,setName]=useState()
  const[email, setEmail]=useState()
  const[age,setAge]=useState()
  const navigate=useNavigate()

  const Submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/createUser", {name,email,age})
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add user</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Enter age"
            onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <button className='btn btn-success'>submit</button>
        </form>

      </div>
      
    </div>
  )
}

export default CreateUser
