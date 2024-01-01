import React from 'react';
import './Advert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Advert() {
  return (
        <div className='Advert'>
      <div>
        <span>
          RESTOCKS ARE EVERY FRIDAY! <FontAwesomeIcon icon={faBell}/>
        </span>
      </div>
    </div>
  );
}

export default Advert;
