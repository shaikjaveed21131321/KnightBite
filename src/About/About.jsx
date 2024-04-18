import React from "react";
import img1 from "../images/food-strip.webp";
import img2 from "../images/app-menu.webp";
import img3 from "../images/burger.webp";
const About = () => {
  return (
    <>
      <div id="banner4">
        <h1 id="text3">
          KNIGHT BITE IS A CLOUD KITCHEN WHICH DELIVERS FOOD TO THE <br />
          NOCTURNALS GIVING <br />
          EQUAL EMPHASIS ON <br />
          FOOD, TECHNOLOGY AND <br />
          LOGISTICS.
        </h1>
      </div>
      <div id="about-grid">
        <div className="about-grid">
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="about-grid">
          Knight Bite started with the idea to serve all the hungry nocturnals
          who find it really difficult to order late night muchies. KB brought
          together late night eaters and helped them order delicious meals at
          their convenience via Knight Bite App and call.
        </div>
        <div className="about-grid">
          <p>
            Knight Bite is one such concept which was highly successful in
            adapting to the emerging market.
          </p>
          <br />
          <br />
          <br />
          <br />  
          <p>
            Biters (customers), accepted and loved the KB app that made the
            ordering process much more easier. In two weeks of the release of
            the app, it was trending on top food apps and was downloaded by more
            than 5000 users across Mangalore and Manipal.
          </p>
        </div>
        <div className="about-grid">
          <img src={img2} alt="" className="gridimg" />
        </div>
        <div className="about-grid">
          <img src={img3} alt="" className="gridimg" />
        </div>
        <div className="about-grid">
          Going forward, our aim is to help and bring smiles in many more faces
          and cover many more cities across India and around the world.
        </div>
        
        <div className="about-grid">
          <h1>Locations</h1>
          <br />
          <br />
          <p>
            <span className="location">Bengaluru</span> <span>Hours:</span> 7:00
            pm - 4:00 am
          </p>
          <p>
            <span className="location">Mangalore</span> <span>Hours:</span> 7:00
            pm - 4:00 am
          </p>
          <p>
            <span className="location">Mysuru</span> <span>Hours:</span> 7:00 pm
            - 4:00 am
          </p>
          <p>
            <span className="location">Hyderabad</span> <span>Hours:</span> 7:00
            pm - 4:00 am
          </p>
          <p>
            <span className="location">Hubli</span> <span>Hours:</span> 7:00 pm
            - 4:00 am
          </p>
          <p>
            <span className="location">Manipal</span> <span>Hours:</span> 7:00
            pm - 4:00 am
          </p>
        </div>
        <div className="about-grid"></div>
      </div>
      {/* <footer  id="copyright">
            <p>Ⓒ Copyright 2024. Knight Bite Pvt. Ltd. All Rights Reserved</p>
            </footer> */}
    </>
  );
};

export default About;
