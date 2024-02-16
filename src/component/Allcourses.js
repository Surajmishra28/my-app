import React, { useState }  from "react";

import courses from "./courses"


const Allcourses=()=>{
    const [course,setCourses] = useState([
        {title: "java course",description: "this is demo course"},
        {title: "java course",description: "this is demo course"},
        {title: "java course",description: "this is demo course"},

    ]);
    return (
        <div>
            <h1>All coures</h1>
            <p>
                List of courses are as follows
            </p>
            {
                course.length>0? course.map((item)=>(
                    < courses  course = {item} />
                )) : "No courses"
            }
        </div>

    );
};
export default Allcourses;