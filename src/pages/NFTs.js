import React, { useState, useEffect } from "react";
import apesmoke from "../images/apeWsmoke.jpeg";
import apefire from "../images/apeWfire.png";
import apeaxe from "../images/apeWaxe.png";
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
        const response = await fetch("https://api.sheety.co/fd10818c1eae04caf0980564586d4c52/nftAuction/sheet1");
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
      const response = await fetch("https://api.sheety.co/fd10818c1eae04caf0980564586d4c52/nftAuction/sheet1", {
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
        <h2>$CALAPES NFTs Coming Soon!</h2>
        <div className="nft-images">
          <img
            className="CalApeImg"
            src={apesmoke}
            alt="CalApe"
            onClick={() => setSelectedNFT("NFT 1")}
          />
          <img
            className="CalApeImg"
            src={apefire}
            alt="CalApe"
            onClick={() => setSelectedNFT("NFT 2")}
          />
          <img
            className="CalApeImg"
            src={apeaxe}
            alt="CalApe"
            onClick={() => setSelectedNFT("NFT 3")}
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
              <option value="NFT 1">NFT 1</option>
              <option value="NFT 2">NFT 2</option>
              <option value="NFT 3">NFT 3</option>
            </select>
          </label>
          <br />
          <label>
            Bid Amount (SOL): <br/>
            <input
              id="bid"
              type="number"
              placeholder="5"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              min="5"  // Setting the minimum to 0.001 SOL
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
        </form>

        {message && <p>{message}</p>}

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
