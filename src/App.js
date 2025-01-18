import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ChartComponent from "./components/ChartComponent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Merch from "./pages/Merch";
import Landing from "./pages/Landing";  
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import NFTs from "./pages/NFTs";
import Transactions from "./components/transactions";
import About from "./pages/About";

import Loader from "./components/Loader";  
import "./App.css";
import { Buffer } from "buffer";
import Presale from "./pages/BuyPreSale";

if (typeof window !== "undefined" && !window.Buffer) {
  window.Buffer = Buffer;
}

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  
    }, 1000);  
  }, []);

  const connectWallet = async () => {
    const { solana } = window;
    if (solana && solana.isPhantom) {
      try {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("Phantom Wallet not found! Please install it.");
    }
  };

  const disconnectWallet = async () => {
    const { solana } = window;
    if (solana && solana.isPhantom) {
      try {
        await solana.disconnect(); // Disconnect using Phantom Wallet's API
        setWalletAddress(null); // Clear the wallet address from state
        console.log("Wallet disconnected");
      } catch (err) {
        console.error("Failed to disconnect wallet:", err);
      }
    } else {
      console.warn("Phantom Wallet not found or already disconnected.");
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Loader displayed when loading state is true */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <header>
              {/* Wrap h1 in a Link component to navigate to the root path */}
              <Link to="/" className="Landing">
                <h1>CalApes</h1>
              </Link>
              <Navbar walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
            </header>

            <Routes>
              {/* Set Landing route */}
              <Route path="/" element={<Landing />} />

              <Route path="/tokenomics" element={
                <div className="container">
                  <ChartComponent walletAddress={walletAddress} />
                </div>
              } />

              {/* Other routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/nfts" element={<NFTs />} />
              <Route path="/about" element={<About />} />
              <Route path="/presale" element={<Presale />} />

              <Route path="*" element={<Landing />} />
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;