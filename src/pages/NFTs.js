import React, { useState, useEffect } from "react";
import apesmoke from "../images/apeWsmoke.jpeg";
import apefire from "../images/apeWfire.png";
import apeaxe from "../images/apeWaxe.png";
import nft4 from "../images/NFT4.jpeg";
import nft5 from "../images/NFT5.png";
import nft6 from "../images/NFT6.png";
import './NFTs.css';

function NFTs() {
  const [selectedNFT, setSelectedNFT] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [message, setMessage] = useState("");
  const [auctionData, setAuctionData] = useState([]);

  // Fetch auction data from Google Sheet using Sheety API
  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const response = await fetch("https://api.sheety.co/0b164f788b2e5dd686d482aebc9eaa2a/nftAuction/sheet1");
        const data = await response.json();
        setAuctionData(data.sheet1); // Assuming 'sheet1' contains the auction data
      } catch (error) {
        console.error("Error fetching auction data:", error);
      }
    };

    fetchAuctionData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare auction data
    const auctionData = {
      nft: selectedNFT,
      bid: bidAmount,
      walletAddress: walletAddress,
      timestamp: new Date().toLocaleString(), // You can include a timestamp
    };

    try {
      // Send data to Sheety API
      const response = await fetch("https://api.sheety.co/0b164f788b2e5dd686d482aebc9eaa2a/nftAuction/sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet1: auctionData, // 'sheet1' is the name of the sheet in Sheety
        }),
      });

      if (response.ok) {
        setMessage("Your bid has been submitted!");
      } else {
        setMessage("Failed to submit your bid. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      setMessage("Failed to submit your bid. Please try again.");
    }
  };

  return (
    <div id="calNFT">
      <div className="calapesNFT">
        <h2>$CALAPES NFTs</h2>
        <div className="nft-images">
          <img
            className="CalApeImg"
            src={apesmoke}
            alt="CalApe"
            onClick={() => setSelectedNFT("1")}
          />
          <img
            className="CalApeImg"
            src={apefire}
            alt="CalApe"
            onClick={() => setSelectedNFT("2")}
          />
          <img
            className="CalApeImg"
            src={apeaxe}
            alt="CalApe"
            onClick={() => setSelectedNFT("3")}
          />
          <img
            className="CalApeImg"
            src={nft4}
            alt="CalApe"
            onClick={() => setSelectedNFT("4")}
          />
          <img
            className="CalApeImg"
            src={nft5}
            alt="CalApe"
            onClick={() => setSelectedNFT("5")}
          />
          <img
            className="CalApeImg"
            src={nft6}
            alt="CalApe"
            onClick={() => setSelectedNFT("6")}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Select an NFT and place your bid</h3>
          <label>
            Select NFT: <br />
            <select
              value={selectedNFT}
              onChange={(e) => setSelectedNFT(e.target.value)}
              required
            >
              <option value="">Choose an NFT</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
          <br />
          <label>
            Bid Amount (SOL): <br/>
            <input
              id="bid"
              type="number"
              placeholder="0.5"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              min="0.5"  // Setting the minimum to 0.5 SOL
              step="0.001" // Allow increments of 0.001 SOL
              required
            />
          </label>
          <br />
          <label>
            Wallet Address: <br/>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Place Bid</button>

          {message && <p>{message}</p>}
        </form>


        {/* Display auction data */}
        <div className="auction-data">
          <h3>Auction Data</h3>
          {auctionData.length > 0 ? (
            <ul>
              {auctionData.map((item, index) => (
                <li key={index}>
                  <strong>NFT:</strong> {item.nft}<br />
                  <strong>Bid:</strong> {item.bid} SOL<br />
                  <strong>Wallet Address:</strong> {item.walletAddress}<br />
                  <strong>Timestamp:</strong> {item.timestamp}
                </li>
              ))}
            </ul>
          ) : (
            <p>No auction data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NFTs;