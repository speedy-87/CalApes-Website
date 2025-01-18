import React from 'react';
import './Home.css';
import ApeVideo from "../images/apes.mp4";
import ape2 from "../images/ape2.png";
import apesmoke from "../images/apeWsmoke.jpeg";
import apeforest from "../images/apeWaxe.png"; 

function Home() {

  return (
    <div className="calHome">
      <div className="cal-apesHome">
        <p className="intro-text">
        <div className="social-links">
                <a href="https://www.tiktok.com/@calapesorg?_t=ZT-8tAlnpC3KFn&_r=1" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-tiktok" id="my-icon" style={{ color: "#ff0000" }}></i>
                </a>
                <a href="https://x.com/calapesltd?s=21&t=dwDaKPMPWPFPDwCfPIuNsA" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter" id="my-icon" style={{ color: "#ff0000" }}></i>
                </a>
                <a href="https://t.me/CalApes" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-telegram" id="my-icon" style={{ color: "#ff0000" }}></i>
                </a>
                <a href="https://www.reddit.com/user/CalApesOrg/?share_id=FsQdAogMvTukGtUDjonLs&utm_content=1&utm_medium=ios_app&utm_name=ioscss&utm_source=share&utm_term=1/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-reddit" id="my-icon" style={{ color: "#ff0000" }}></i>
                </a>
              </div>
        <h2>Mission</h2>
          Saving California from Wildfires <br /> <br />

          Every year, California faces devastating wildfires that threaten lives, property, and the environment. 
          At $CALAPES, we believe in turning chaos into change. Our community-driven token is not just about having fun 
          with memes—it's about making a difference. <br /> <br />

          All Donation funds raised through $CALAPES will be directly donated to California wildfire relief efforts. 
          By investing in $CALAPES, a growing community of apes; you're helping to fund the ones in need and aid in 
          the recovery of fire-stricken areas in California.
        </p>

        <div className="calVideoWrapper">
          <video className="calVideo" autoPlay loop muted playsInline>
            <source src={ApeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


        <div className="calTokenContainer">
          <div className="calTokenInfo">
              <h3>🔥How to buy $CALAPES🔥</h3>
              <p className='news'>
              How to buy $CALAPES<br /> 
              Here is the step by step process how to get $CALAPES
              </p>
              <p className='news-list'>
                1. Set up your wallet on Solana (Phantom, Sollet, etc.) <br /> 
                2. Purchase $CALAPES through a supported decentralized exchange (Raydium, Dexscreener, Jupiter, Meteora). <br />
                3. Hold your $CALAPES, and watch the impact grow!
              </p>
              <a
                  className="btn"
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=9RGMt6ZWrtybcYt3mup6QBwyz9KtQ4tbx9naNSByPvfx"
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
                  <span>BUY $CALAPES</span>
              </a>
          </div>


          <div className="calTokenInfo">
              <h3>Join The Movement</h3>
              <p>
              Get involved today and help the $CALAPES protect California. Buy, hold, and support the cause with 
              $CALAPES—the meme token that’s about more than just laughs. 
              Together, we can make a real difference and create a brighter future for all!
              </p>          
          </div>
        </div>

        <div class="calapes-container">
          <h2 class="heading">Firefighter $CALAPES Unite</h2>
          <p>Join our mission to combat wildfires and support California’s fire relief efforts through <span class="highlight">$CALAPES</span>.</p>

          <div class="subheading-wrapper">
            <div class="subheading-container">
              <img class="subheading-img" src={ape2} alt="Support Wildfire Relief" />
              <h3 class="subheading">Support Wildfire Relief</h3>
              <p>Your contributions through <span class="highlight">$CALAPES</span> directly aid California's wildfire relief initiatives and recovery efforts.</p>
            </div>

            <div class="subheading-container">
              <img class="subheading-img" src={apesmoke} alt="Community-Driven Impact" />
              <h3 class="subheading">Community-Driven Impact</h3>
              <p>Together, we fight wildfires and support those affected in California with <span class="highlight">$CALAPES</span>.</p>
            </div>
            <div class="subheading-container">
              <img class="subheading-img" src={apeforest} alt="Community-Driven Impact" />
              <h3 class="subheading">Meme-Themed Token</h3>
              <p>Experience the fun of memes while contributing to wildfire relief with our community token.</p>
            </div>
          </div>
        </div>


        </div>
      </div>
  );
}

export default Home;