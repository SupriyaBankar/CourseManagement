import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import base_url from '../service/Services';

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    id: '',
    course_name: '',
    course_desc: '',
    rupees: ''
  });

  // Fetch course by ID
  useEffect(() => {
    axios.get(`${base_url}/course/${id}`).then(
      (response) => {
        setCourse(response.data);
      },
      (error) => {
        console.log("Failed to load course", error);
      }
    );
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${base_url}/course/${id}`, course).then(
      () => {
        alert("Course updated successfully");
        navigate('/course'); // redirect to course list
      },
      (error) => {
        alert("Update failed");
        console.log(error);
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-emerald-800">Update Course</h2>

        <input
          type="text"
          name="course_name"
          placeholder="Course Name"
          value={course.course_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="course_desc"
          placeholder="Course Description"
          value={course.course_desc}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <input
          type="number"
          name="rupees"
          placeholder="Price"
          value={course.rupees}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md text-lg font-semibold">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
