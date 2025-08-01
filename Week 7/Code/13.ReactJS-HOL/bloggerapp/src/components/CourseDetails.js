import React from 'react';

const courses = [
  { name: 'Angular', date: '4/5/2021' },
  { name: 'React', date: '6/3/2021' }
];

const CourseDetails = () => {
  return (
    <div>
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
