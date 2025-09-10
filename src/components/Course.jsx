import React from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText
} from 'reactstrap';
import axios from 'axios';
import base_url from '../service/Services';
import { useNavigate } from 'react-router-dom';

const Course = ({ course, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update/${course.id}`);
  };

  const handleDelete = () => {
    axios.delete(`${base_url}/course/${course.id}`).then(
      () => {
        alert("Course deleted successfully!");
        onDelete(course.id);
      },
      (error) => {
        console.error("Delete failed:", error);
        alert("❌ Failed to delete course.");
      }
    );
  };

  return (
    <Card className="w-64 shadow-md rounded-lg border border-gray-200 m-2">
      <CardBody className="p-4">
        <h5 className="text-xl font-bold text-emerald-800 truncate">{course.course_name}</h5>
        <CardSubtitle className="text-sm text-gray-500 mb-2 font-semibold">
          ₹{course.rupees}
        </CardSubtitle>
        <CardText className="text-sm text-gray-700 h-16 overflow-hidden">
          {course.course_desc}
        </CardText>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
          >
            Delete
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Course;


