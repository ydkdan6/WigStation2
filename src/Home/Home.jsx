// Home.jsx
import React from 'react';
import './Home.css'; 

import humanwig3 from '../Human-wig/stockimg3.jpg';


function Home() {
  return (
    <div className='Home'>
      <div className="Homesubcontainer">
        {/* Content Section */}
        <section className="content-section">
          <div className='content-container'>
            <div className='ladies-con'><span>ladies beautified</span></div>
            <div>
            <h2>Get Affordable Wigs</h2>
            </div>
            <div>
              <p>
                Discover luxury lace front wigs and bundles at affordable prices. Elevate your style with our high-quality, budget-friendly options. 
                Redefine sophistication effortlessly. Your journey to flawless beauty begins here.
              </p>    
            </div>
            <div className="button-div">
              <button>Talk to Sales</button>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className='Wigsection'>
          <div>       
            <img src={humanwig3} alt="Human hair" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home