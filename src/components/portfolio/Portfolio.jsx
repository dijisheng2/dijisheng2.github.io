import React from 'react'
import "./portfolio.css";
import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/YtbgBQ8/2024-05-15-181003.png",
    title: "CS 100 - Text-Based Game",
    description:
      "Roguelike and text-based game. Have more than 40 different types of monsters. Up to 100 pieces of equipment and weapons. And complex character attributes and growth formulas.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/2cRnBZt/2.png",
    title: "CS 152 - C-Like Language",
    description:
      "The fundamentals of compiler design. Includes lexical analysis, parsing, semantic analysis, compile-time memory organization, run-time memory organization, and code generation",
  },
  {
    id: 3,
    image: "https://i.ibb.co/BfSfvZT/3.png",
    title: "CS 120B - Remote Car",
    description:
      "Embedded processor programming, custom process or design, standard peripherals, memories, interfacing, and hardware/software tradeoffs.",
  },
];

const Portfolio = () => {
  

  return (
    <section className="skills container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="work__card" key={id}>
              <img src={image} alt="" className="skills__img" />

              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio