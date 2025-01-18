import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import banner from '../images/banner.gif';

function Landing() {
  return (
    <div className="calLanding">
      <div className="cal-apesLanding">
        <div id='banner'>
          <img src={banner} alt="banner"/>
        </div>

        <p className="calTagline">
        When California wildfires leave devastation in their wake, and insurance companies turn their backs on those in need, 
        Rampage, the mighty albino gorilla from Reddit, and his team of heroic apes answer the call. With unmatched strength and 
        compassion, they step into food banks, deliver aid to the hardest-hit areas, and honor fallen firefighters who gave their 
        lives to protect others. As communities grapple with betrayal over mismanaged water resources, Rampage and his team become 
        symbols of hope, rallying people to rebuild and support one another in the face of crisis. 
        Together, they ignite a movement of compassion and resilience, proving that heroes come in all shapes—and species.
        </p>
        <p className="calTagline"></p>
        <Link to="/home" className="enterCAL">Join the Firefight!</Link>
      </div>
    </div>
  );
}

export default Landing;