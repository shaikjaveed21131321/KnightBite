import React from "react";
import istore from "../images/ios-store.svg"
import playstore from "../images/google-play-badge.svg"
import feature1 from "../images/feature-1.svg"
import feature2 from "../images/feature-2.svg"
import feature3 from "../images/feature-3.svg"
import feature4 from "../images/feature-4.svg"
import feature5 from "../images/feature-5.svg"
const Home = () => {
  return (
    <>
     <div id="banner">
          <h3 id="text">DELICIOUSNESS, ONE CLICK AWAY!</h3>
          <div id="btn">
            <button><b>Order On Web</b></button>
            <h2>Or</h2>
            <div id="app">
              <img src={istore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
     </div>
     <div id="features">
      <h1>Features</h1>
      <div id="feature">
      <div className="feature"><img src={feature1} alt="" /><div className="feature-description">Late Night Delivery <br />Till 4 Am</div></div>
      <div className="feature"><img src={feature2} alt="" /><div className="feature-description">Order On App Or <br />Call 080-4710607</div></div>
      <div className="feature"><img src={feature3} alt="" /><div className="feature-description">Delivery Within 40 <br />Mins</div></div>
      <div className="feature"><img src={feature4} alt="" /><div className="feature-description">Food For Every Kind <br />Of Hunger</div></div>
      <div className="feature"><img src={feature5} alt="" /><div className="feature-description">Place Bulk Orders <br />Through App</div></div>
      </div>
     </div>
     <div id="banner2">
          <h3 id="text1">ENJOY FOOD, ENJOY LIFE</h3>
     </div>
     <div id="banner3">
      <h3 id="text2">BURGER, FRIES, SHAKES <br />AND MANY MORE</h3>
     </div>
     {/* <footer  id="copyright">
            <p>Ⓒ Copyright 2024. Knight Bite Pvt. Ltd. All Rights Reserved</p>
            </footer> */}
    </>
  );
};

export default Home;
