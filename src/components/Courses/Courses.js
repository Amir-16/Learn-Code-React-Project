import React, { useState } from 'react';
import CourseInfo from '../../CourseInfo';
import Cart from '../Cart/Cart';
import Title from '../Title/Title';
import './Courses.css';


const Courses = () => {

    const first15= CourseInfo.slice(0,15);
    const[courses,setCourse] =useState(first15);
    const [cart,setCart] =useState([]);

    const handleAddCourse =(course) => {

       // console.log('add',course);
        const newCart=[...cart,course];
        setCart(newCart);
    }
    
    

   // console.log(CourseInfo);
    return (
        <div className="course-container">

            <div className="title-container">   
                 {

                 courses.map(pd =><Title 
                    handleAddCourse={handleAddCourse}
                    course={pd}
                    ></Title>)

                 }
             
           </div>
           
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Courses;