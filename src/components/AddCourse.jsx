import React, { useState } from 'react';
import axios from 'axios';
import base_url from '../service/Services';

const AddCourse = () => {
  const [course, setCourse] = useState({
    id: '',
    course_name: '',
    course_desc: '',
    rupees: ''
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Submitted Course:', course);
    postData(course);
  };

  const postData = (data) => {
    axios.post(`${base_url}/course`, data)
      .then((response) => {
        console.log('✅ Course added successfully');
        alert('Course added successfully!');
        setCourse({
          id: '',
          course_name: '',
          course_desc: '',
          rupees: ''
        }); // Reset form
      })
      .catch((error) => {
        console.error('❌ Error adding course:', error);
        alert('Failed to add course.');
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4'
      >
        <h2 className='text-2xl font-bold text-center text-emerald-800'>Add New Course</h2>

        <input
          type='text'
          name='course_name'
          placeholder='Enter course name'
          value={course.course_name}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
        />

        <input
          type='text'
          name='course_desc'
          placeholder='Enter course description'
          value={course.course_desc}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
        />

        <input
          type='text'
          name='rupees'
          placeholder='Enter course price'
          value={course.rupees}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
        />

        <button
          type='submit'
          className='w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md text-lg font-semibold'
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
