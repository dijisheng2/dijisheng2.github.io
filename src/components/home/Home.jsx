import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Jun Luo</h1>
        <span className="home_education">I'm a CS student from UC Riverside</span>

        <HeaderSocials />


        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home