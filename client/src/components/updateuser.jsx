import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams(); // Extract id from route params
  const [name, setName] = useState('');  // Initialize state with empty strings
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name || ''); // Set state with fetched data
        setEmail(result.data.email || '');
        setAge(result.data.age || '');
      })
      .catch(err => console.log(err));
  }, [id]); // Include id in dependency array

  const update = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/'); // Navigate back to the main page
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        {/* Added onSubmit handler */}
        <form onSubmit={update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name} // Set value to state
              onChange={(e) => setName(e.target.value)} // Update state on change
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email} // Set value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={age} // Set value to state
              onChange={(e) => setAge(e.target.value)} // Update state on change
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
