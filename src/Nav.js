import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
const [show, handleShow]= useState(false);

const transitionNavBar = () => {
  if (window.scrollY>100) {
    handleShow(true);
  } else {
    handleShow(false);
  }
};

useEffect(()=>{
  window.addEventListener('scroll', transitionNavBar);
  return()=>window.removeEventListener('scroll',transitionNavBar);
}, []);

  return <div className={`nav ${show && `nav_black`}`}>
            <div className='nav_contents'>
             <img 
                className='nav_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt=''
             />

             <img 
                className='nav_avatar'
                src='data:image/jpeg;base64,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' 
                alt=''
        />
            </div>
       
  </div>;
}

export default Nav;
