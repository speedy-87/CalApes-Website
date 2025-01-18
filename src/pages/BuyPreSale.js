import React from 'react';
import './Landing.css';

function Presale() {
  return (
    <div className="calLanding">
      <div className="cal-apesLanding">
        <h2>Buy $CALAPES</h2>

        <p className="calTagline">
         If you purchased presale, you will need to visit pinksale website to claim your tokens! 
         <br /> 
         (Our voice chat will be open for any help or support needed)
        </p>
        <p className="calTagline"></p>
        <a href="https://www.pinksale.finance/solana/launchpad/2F1WZUHWkeKhJgMsCRKsVTwBN79qzZnb5kzPk3FmXHLu" className="enterCAL" target="_blank" rel="noopener noreferrer">
            Claim Tokens
          </a>
          <br />
          <a href="https://raydium.io/swap/?inputMint=sol&outputMint=9RGMt6ZWrtybcYt3mup6QBwyz9KtQ4tbx9naNSByPvfx" className="enterCAL" target="_blank" rel="noopener noreferrer">
            Buy $CALAPES
          </a>
      </div>
    </div>
  );
}

export default Presale;