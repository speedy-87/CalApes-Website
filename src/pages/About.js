import React from 'react';
import './About.css';

function About() {
  return (
    <div className="calAbout">
      <div className="cal-apesAbout">
        <h2>About CalApes</h2>
        <p className="calTagline">
        The crypto world had become a battlefield, overrun by scams and hollow promises, leaving countless retail investors 
        disillusioned and betrayed. Rampage, a fiery leader from Reddit known for rallying communities against injustice, 
        had seen enough. The bad actors in the meme coin space were tarnishing everything he believed in—community, transparency, 
        and real impact. Meanwhile, X and the X Team, a group of skilled crypto veterans, had their own scars from being burned by 
        fraudulent projects. Tired of watching the crypto world spiral into chaos, they reached out to Rampage, 
        knowing his passion for justice could unite them.
        </p>
        <p className="calTaglineAbout">
        Together, they forged a plan, but they needed reinforcements. Enter the Runi Team, a group of like-minded innovators 
        with a shared vision of creating something meaningful in a space riddled with greed. Three teams combined their 
        resources and expertise to launch a groundbreaking coin—not just another meme, but a mission. 
        Their token was designed to directly aid the families devastated by the raging LA wildfires, fund food banks, 
        and support the loved ones of fallen firefighters who gave their lives in service.
        </p>
        <p className="calTaglineAbout">
        What started as a fight against scams became a movement to redefine the crypto meme world. 
        Our coin’s message spread like wildfire itself, igniting hope in a space long overshadowed by doubt. 
        Together, Rampage, X and his X Team and the Runi Team proved that crypto could be more than a game of profits, 
        it could be a lifeline, a community, and a force for good. Our coin isn't just a meme; it's a rallying cry for a better, 
        brighter future that is changing lives for the good! 
        Please join the community and help change this space forever.
        </p>
      </div>

      <div className="cal-apesPartners">
        <h2>CalApes Partnerships</h2>

        
        <p className="partnerTagline">
            $CALAPES🔥 x $RUNI🦄 <br />
            <a
                  className="btn"
                  href="https://t.me/rizzunicorn"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <svg className="border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 60">
                  <path
                      className="bg-line"
                      d="M8,1 H172 Q179,1 179,8 V52 Q179,59 172,59 H8 Q1,59 1,52 V8 Q1,1 8,1 Z"
                  />
                  <path
                      className="hl-line"
                      d="M8,1 H172 Q179,1 179,8 V52 Q179,59 172,59 H8 Q1,59 1,52 V8 Q1,1 8,1 Z"
                  />
                  </svg>
                  <span>$RUNI Telegram</span>
              </a>
        </p>


        <p className="partnerTagline">
            More Partnerships Coming!
        </p>

      </div>
    </div>
  );
}

export default About;