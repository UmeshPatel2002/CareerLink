import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../Navbar';

const Signup=()=> {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'student', 
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/register', formData, {
              headers: {
               'Content-Type': "application/json",
                'Accept':'application/json',
               
              },
            });
            console.log(response.data);
            if (response.data.success) {
              console.log('Form submitted successfully:', response.data);
              window.location.replace("/")
            } else {
              console.error('Unexpected response:', response);
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        
      };

  return (
    <div>
      <Navbar/>
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
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className='border border-solid '
                        />
                    </div>

                    <div className='flex  gap-[10px] my-2'>
                       <label htmlFor='phoneNumber'>PhoneNumber:</label>
                        <input
                           id='phoneNumber'
                            type="text"
                            value={formData.phoneNumber}
                            name="phoneNumber"
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
                        />
                    </div>
                    <div className='flex items-center justify-between gap-[20px]'>
                        <div className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <input
                                   id='stuednt'
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