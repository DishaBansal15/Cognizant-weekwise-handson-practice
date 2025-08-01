import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box">
        <CourseDetails />
      </div>
      <div className="box">
        <BookDetails />
      </div>
      <div className="box">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
