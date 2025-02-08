import React from 'react'
import "./About.css"
import about_img from "../../assets/edusity_assets/about.png"
import play_icon from "../../assets/edusity_assets/play-icon.png"
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt = "" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tommorrow's Leaders Today</h2>
       <p>Embark on a transformative educational journey with our university's comprehension education programs.Our cutting-edge curriculu is designed to empowwer students with the knowledge, skills, and expericence needed to excel in the dynamic field of education.</p>
       <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communitites.</p>
       <p>Whether you aspire to become a teacher, adinistartor, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
