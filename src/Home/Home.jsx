// Home.jsx
import React from 'react';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import humanwig3 from '../Human-wig/stockimg3.jpg';


function Home() {
  return (
    <div className='Home'>
      <div className="Homesubcontainer">
        {/* Content Section */}
        <section className="content-section">
          <div className='content-container'>
            <div>
            <h2>Affordable Wigs <br /> Just for your happiness</h2>
            </div>
            <div className='description-para'>
              <p>
                Discover luxury lace front wigs and bundles at affordable prices. Elevate your style with our high-quality, budget-friendly options. 
                Redefine sophistication effortlessly. Your journey to flawless beauty begins here.
              </p>    
            </div>
            <div className="talk-to-sale">
              <button><a href="">Talk to Sales</a></button>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className='Wigsection'>
          <div>     
            <img src={humanwig3} alt="Human hair" />
            <div className='ladies-con'><span>ladies beautified</span></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home