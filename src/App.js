import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [active, setActive] = useState(false);

  const openAccordion = () => {
    if(active === false){
      setActive(true);
    }
    else{
      setActive(false);
    }
  }

  return (
    <div className="app">
      <div className="accordion-holder">
        <div onClick={openAccordion} className="accordion">Why park a domain name in Parkname?<span className="arrow">{active ? '^' : '˅'}</span>
          {active &&
            <p className="content">
              Parkname is the leading industry standard for domain name parking and monetization services.We offer a wide variety of services to help you achieve success.
            </p>}
        </div>
      </div>
    </div>
  ); 
};

export default App;
