// src/components/ChartComponent.js
import React from "react";
import './tokeninfo.css';

const ChartComponent = ({ walletAddress }) => {
  return (
    <div className="chart-container">
      {/* Conditionally render message above the chart */}
      {!walletAddress && (
        <div className="connect-wallet-message">
          
        </div>
      )}

      <div id="dexscreener-embed">
        <iframe
          id="calapes-chart"
          src="https://dexscreener.com/solana/Bts488tJufKD3e55vPLiZFLAFJ5CP6548VWwoECUsHdM?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
          title="CalApes Chart"
          allowFullScreen
        ></iframe>
      </div>

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