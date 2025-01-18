import React from 'react';
import './Landing.css';

function Presale() {
  return (
    <div className="calLanding">
      <div className="cal-apesLanding">
        <h2>Buy $CALAPES Presale</h2>

        <p className="calTagline">
         You will need to visit pinksale website to claim their tokens on Launch day! 
         <br /> 
         (Our vc will be open for any help or support needed)
        </p>
        <p className="calTagline"></p>
        <a href="https://www.pinksale.finance/solana/launchpad/2F1WZUHWkeKhJgMsCRKsVTwBN79qzZnb5kzPk3FmXHLu" className="enterCAL" target="_blank" rel="noopener noreferrer">
            BUY PRESALE
          </a>
      </div>
    </div>
  );
}

export default Presale;