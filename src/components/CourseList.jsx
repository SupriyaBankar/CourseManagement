import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../service/Services';
import Course from './Course';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const getAllCourses = () => {
    axios.get(`${base_url}/course`).then(
      (response) => {
        setCourses(response.data);
      },
      (error) => {
        console.log("Error fetching courses", error);
      }
    );
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const removeCourseFromUI = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>All Courses</h1>
      <div className='flex flex-wrap gap-4 justify-start'>
        {courses.length > 0 ? (
          courses.map((item) => (
            <Course key={item.id} course={item} onDelete={removeCourseFromUI} />
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
