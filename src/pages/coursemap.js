//not sure what we need into the course map... should we route further into individual ones? 
import React from "react";


function CourseMap(){
    return(
        <body>
        <div className="courseMap
        ">
        <h1> Bioengineering CourseMap</h1>
        <img
        //need to check path
        src="../CourseMap/tempCourseMap.jpg"
        alt="Bioengineering CourseMap"
        style={{ width: "100%", maxWidth: "800px", height: "auto" }}
      />
        </div>
        </body>
    )
}
export default CourseMap;