import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Jun Luo,
              computer science student from UC Riverside.
              I will graduate in June. I love coding!</p>
              <a href="https://drive.google.com/uc?export=download&id=1yzZ1zQDCVV4dV_42eCKvuPL_-NTyDy87" className="btn" download="Jun_Luo_Resume.pdf">Download Resume</a>

          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Software Development</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage software_development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web_development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills__name">Computer Graphics</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage computer_graphics"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About