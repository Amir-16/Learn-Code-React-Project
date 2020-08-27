import React from 'react';
import './Title.css';

const Title = (props) => {
    //console.log(props.course);
    
   const {img,title,description,price}=props.course;
    return (
        <div className="title">

            <div>
            <img src={img} alt="" />

            </div>
            <div className="course-title">
                <h4>{title}</h4>
                <br/>
                    <p><small>Details:{description}</small></p>
                    <p>Price: {price}</p>
                    <button 
                    
                    className="main-button"
                    onClick={() => props.handleAddCourse(props.course)}
                    >Enroll Now</button>

            </div>
           
                

        </div>
    );
};

export default Title;