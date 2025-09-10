import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import UpdateCourse from './components/UpdateCourse';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/update/:id" element={<UpdateCourse />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
