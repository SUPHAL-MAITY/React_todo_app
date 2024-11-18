import React from 'react'
import "../App.css"

const Home = () => {
  return (
    <div className='home'>
        
        <div className="header">
            
            <div className="overlay">
                <img src="/Assests/shape.jpg" className='overlay_img' alt="background  shape" />
            </div>
        </div>
        <div className="nav">
            <img src="Assests/undraw_mobile_ux_re_59hr 1.svg" id='nav_img' alt="" />
            
        </div>
        <div className="nav_title">
            <p className='nav_title_para'>Gets things done with TODo</p>
        </div>
        <div className="box">
            <div className="box_para_container">
                <p>Streamline your day with our intuitive todo app, seamlessly organizing tasks and boosting productivity. Your ultimate tool for efficient task management</p>
            </div>
        </div>
        <div className="btn_contaner">
            <button className='btn'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Home





// ../../public/Assests/shape.png