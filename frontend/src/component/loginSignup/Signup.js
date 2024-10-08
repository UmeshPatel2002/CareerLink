import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { setUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Signup=()=> {
  const navigate=useNavigate()
  const distpatch=useDispatch()

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'student', 
      });

      const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber' && value.length===10) {
          return;
        }
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form Data:', formData);  // Add this to check the form data
        
        try {
          const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/register`, formData, {
            headers: {
              'Content-Type': "application/json",
              'Accept': 'application/json',
            },
            withCredentials: true
          });
          
          console.log(res.data);
          if (res.data.success) {
            console.log('Form submitted successfully:', res.data);
            distpatch(setUser(res.data.user));
            navigate('/');
          } else {
            console.error('Unexpected response:', res.data.message);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

  return (
    <div>
       <div className='flex items-center justify-center mx-auto'>
                <form onSubmit={handleSubmit} className='  border border-gray-200 rounded-md p-6 my-10'>
                    <h1 className=' font-bold text-xl mb-5'>Sign Up</h1>
                   
                    <div className='flex  gap-[44px] my-2'>
                        <label htmlFor='name' > FullName:</label>
                        <input
                            id='name'
                            type="text"
                            value={formData.fullName}
                            name="fullName"
                            onChange={handleChange}
                            required
                            placeholder="Enter your name "
                            className='border border-solid '
                        />
                    </div>
                    <div className='flex  gap-[74px] my-2'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            id='email'
                            type="email"
                            value={formData.email}
                            name="email"
                            required
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className='border border-solid '
                        />
                    </div>

                    <div className='flex  gap-[10px] my-2'>
                       <label htmlFor='phoneNumber'>PhoneNumber:</label>
                        <input
                           id='phoneNumber'
                            type="number"
                            maxLength={10}
                            value={formData.phoneNumber}
                            name="phoneNumber"
                            required
                            onChange={handleChange}
                            placeholder="9054545452"
                            className='border border-solid '
                        />
                    </div>
                    <div className='flex  gap-[48px] my-2'>
                        <label htmlFor='pass'>Password:</label>
                        <input
                            id='pass'
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}                            
                            placeholder="password"
                            className='border border-solid '
                            required
                        />
                    </div>
                    <div className='flex items-center justify-between gap-[20px]'>
                        <div className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <input
                                   id='student'
                                    type="radio"
                                    name="role"
                                    value="student"                        
                                    checked={formData.role === 'student'}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <label htmlFor='student'>Student</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    id='recruiter'
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={formData.role === 'recruiter'}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <label htmlFor='recruiter'>Recruiter</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    <button type="submit" className="w-[90px] h[30px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
                    <p className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></p>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}

export default Signup