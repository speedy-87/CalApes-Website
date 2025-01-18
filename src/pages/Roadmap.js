// src/pages/Roadmap.js
import React from "react";
import './Roadmap.css';

function Roadmap() {
  return (
    <div id="roadmap" className="roadmap-container">
      <h2>Roadmap</h2>
      
      <div className="roadmap-phase phase1">
        <h3>Phase 1: Successful Launch, DEX Listing, and Secure the Dip</h3>
        <p><strong>Goal:</strong> Achieve a secure launch, establish trust, and set the foundation for sustainable growth.</p>
        <ul>
          <li>Successfully launch the token with a 100% burnt liquidity pool, ensuring trust and transparency.</li>
          <li>Target a $100K Market Cap (MC) as the first major milestone.</li>
          <li>Conduct a security audit (Daily Scans) and publicize the findings to bolster investor confidence.</li>
          <li>Secure a seamless listing on a Decentralized Exchange (DEX) and actively monitor initial trading activity.</li>
          <li>Secure the Dip: 
            <ul>
              <li>Encourage investors to buy and hold during early trading stages to establish a strong price floor and minimize volatility.</li>
              <li>Focus on building a robust holder base with an initial target of 500 unique holders.</li>
            </ul>
          </li>
          <li>Allocate early funds towards marketing basics, including social media announcements and influencer partnerships, to attract the first wave of new investors.</li>
        </ul>
      </div>

      <div className="roadmap-phase phase2">
        <h3>Phase 2: Community Building, Social Presence, and Web Development</h3>
        <p><strong>Goal:</strong> Establish a strong community and build project visibility.</p>
        <ul>
          <li>Consolidate the initial Market Cap growth while focusing on maintaining a stable and engaged holder base.</li>
          <li>Develop and launch an interactive website with a roadmap tracker, whitepaper, and FAQ section for new investors.</li>
          <li>Expand social presence by setting clear follower targets (e.g., 1,000+ followers across platforms like Telegram, Twitter, and Discord).</li>
          <li>Foster community-driven content, such as meme contests and discussion threads, to organically build engagement.</li>
          <li>Community Drop:
            <ul>
              <li>Execute a targeted token airdrop to top holders of established projects in other crypto communities.</li>
              <li>Allocate a specific amount of RUNI tokens to these holders to raise awareness about the project and incentivize them to join and invest.</li>
              <li>Allocate 500K RUNI to our community for randomized drops.</li>
              <li>Allocate 500K RUNI to our RUNI Referral Program</li>
              <li>Actively engage with these outside communities by participating in their discussions and promoting collaboration opportunities.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="roadmap-phase phase3">
        <h3>Phase 3: Marketing Blitz, Partnerships, and Giveaways</h3>
        <p><strong>Goal:</strong> Increase visibility and attract new investors to drive the chart upward.</p>
        <ul>
          <li>Launch a multi-channel marketing campaign, including ads on crypto platforms and partnerships with trusted influencers.</li>
          <li>Roll out strategic giveaways and competitions with rewards tied to token ownership, aiming to create Chart Climb momentum.</li>
          <li>Focus on measurable goals like doubling trading volume (e.g., exceeding $50K daily volume) and increasing holders to 2,000+ wallets.</li>
          <li>Form partnerships with other crypto projects or decentralized applications (dApps) to expand the ecosystem.</li>
          <li>Promote milestones, such as the $125K ATH achieved in Phase 1, to create confidence in the project's future.</li>
        </ul>
      </div>


      <div className="roadmap-phase phase4">
        <h3>Phase 4: Merchandise Store, NFTs, Mobile Game, and BlueChip Status</h3>
        <p><strong>Goal:</strong> Diversify the project’s utility and establish a premium market position.</p>
        <ul>
          <li>Launch a merchandise store offering exclusive branded items, with a portion of proceeds allocated to token burns or liquidity.</li>
          <li>Introduce an NFT collection with utility benefits like access to exclusive events, or voting rights in community decisions.</li>
          <li>Pursue CEX listings to further legitimize the token and expand its reach beyond DEX users.</li>
          <li>Develop and release a community-driven mobile game, available on the App Store and fully integrated with the project:</li>
          <ul>
            <li>The game will be playable directly from the project’s website.</li>
            <li>Implement in-game features or rewards tied to RUNI token utility, such as earning tokens or unlocking special items through gameplay.</li>
          </ul>
          <li>Target new Market Cap milestones, aiming to surpass the all-time high (ATH) and approach BlueChip status in the crypto community.</li>
        </ul>
      </div>

      <div className="roadmap-phase phase5">
        <h3>Phase 5: Community Events, Rewards, and Charity Donations</h3>
        <p><strong>Goal:</strong> Strengthen community ties and give back to society.</p>
        <ul>
          <li>Host community events, such as AMAs, online meetups, or even in-person gatherings if feasible, to celebrate project milestones.</li>
          <li>Organize charity donation campaigns, with community-driven input on where funds should go, ensuring full transparency through updates and audits.</li>
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;