import React, { useState } from "react";

import Courses from "./courses";

const Allcourses = () => {
  const [courses, setCourses] = useState([
    { title: "java course", description: "this is demo course" },
    { title: "python course", description: "this is demo course" },
    { title: "php course", description: "this is demo course" },
  ]);
  return (
    <div>
      <h1>All coures</h1>
      <p>List of courses are as follows</p>
      {courses.length > 0
        ? courses.map((item) => <Courses key={item.title} course={item} />)
        : "No courses"}
    </div>
  );
};
export default Allcourses;
