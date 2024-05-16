import React from 'react';
import "./hobby.css";
import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"

const Hobby = () => {
  return (
    <section className="hobby container section" id="hobby">
      <h2 className="section__title">Hobby</h2>

      <div className="hobby_container grid">
        <div className="hobby_item">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2022/10/21/Classical-music-instrument-piano-icon-Graphics-42693813-1.jpg" alt="" className="hobby_img" />
          <h3 className="hobby_plan">Piano</h3>
        </div>

        <div className="hobby_item">
          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/guitar.png" alt="" className="hobby_img" />
          <h3 className="hobby_plan">Guitar</h3>
        </div>

        <div className="hobby_item">
          <img src="https://t3.ftcdn.net/jpg/03/99/27/46/360_F_399274698_ybhYwqtuApPlEHs06cqA7IyewtjCmoib.jpg" alt="" className="hobby_img" />
          <h3 className="hobby_plan">Hiking</h3>
        </div>
      </div>
    </section>
  )
}

export default Hobby