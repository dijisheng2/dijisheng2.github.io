import React from 'react';
import "./sidebar.css";
//import Logo from "../../assets/JL.png";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src="https://i.ibb.co/8xwLJqV/2024-05-12-183843.png" alt="2024-05-12-183843" border="0" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="icon-notebook"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#education" className="nav__link">
                <i className="icon-badge"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-magic-wand"></i>
              </a>
            </li>


            <li className="nav__item">
              <a href="#hobby" className="nav__link">
                <i className="icon-question"></i>
              </a>
            </li>


            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-plane"></i>
              </a>
            </li>

          
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; 2024 - 2025.</span>
      </div>
    </aside>
  )
}

export default Sidebar