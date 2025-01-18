// src/components/ChartComponent.js
import React from "react";
import './tokeninfo.css';

const ChartComponent = ({ walletAddress }) => {
  return (
    <div className="chart-container">
      {/* Conditionally render message above the chart 
      {!walletAddress && (
        <div className="connect-wallet-message">
          
        </div>
      )}

      <div id="dexscreener-embed">
        <iframe
          id="calapes-chart"
          src="https://dexscreener.com/solana/HkEMYrJXrQ2VyFFCzFYgkNqHogDkKrAf8Rxn289HKPQ9?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=15"
          title="CalApes Chart"
          allowFullScreen
        ></iframe>
      </div>*/}

      <div className="calTokenomics">
          <h3>Tokenomics</h3>
          <ul>
            <li>Total supply: 1,000,000,000</li>
            <li>Presale: 40%</li>
            <li>LP: 40%</li>
            <li>Charity: 20%</li>
          </ul>
      </div>
    </div>
  );
};

export default ChartComponent;