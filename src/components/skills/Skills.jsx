import React from 'react';
import "./skills.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Software Development",
    description:
      "Good at C language, java, and python. Have good knowledge of data structures, algorithms, and programming.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Proficient in html, css, an javascript. Experience in react and wordpress.",
  },
  {
    id: 3,
    image: Image3,
    title: "Computer Graphics",
    description:
      "Some degree of mastery of geometric transformations, viewing, solid modeling techniques, hidden-surface removal algorithms, color models, illumination, and shading.",
  },
];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="skills__card" key={id}>
              <img src={image} alt="" className="skills__img" />

              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Skills