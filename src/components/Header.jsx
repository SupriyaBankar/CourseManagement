import React from 'react';
import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-emerald-900 text-white px-6 py-4 flex items-center justify-between sticky'>
      <div className='flex items-center gap-4'>
        <img src={logo} alt='Logo' className='h-10 w-10 rounded' />
        <h1 className='text-xl font-bold hover:bg-green-700 px-2 rounded'>Learn From Course</h1>
      </div>
      
      <div className='flex gap-4'>
        <Link to='/' className='text-lg font-medium hover:bg-green-700 px-3 py-1 rounded'>Home</Link>
        <Link to='/add-course' className='text-lg font-medium hover:bg-green-700 px-3 py-1 rounded'>Add Course</Link>
        <Link to='/course' className='text-lg font-medium hover:bg-green-700 px-3 py-1 rounded'>Courses</Link>
      </div>
    </nav>
  );
};

export default Header;
