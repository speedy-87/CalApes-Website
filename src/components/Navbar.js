import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar({ walletAddress, connectWallet, disconnectWallet }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getShortenedAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  return (
    <nav className="navbar">
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/home" className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/tokenomics" className="nav-link" onClick={closeMenu}>Tokenomics</Link></li>
        <li><Link to="/roadmap" className="nav-link" onClick={closeMenu}>Roadmap</Link></li>
        <li><Link to="/transactions" className="nav-link" onClick={closeMenu}>Transactions</Link></li>
        <li><Link to="/merch" className="nav-link" onClick={closeMenu}>Merch</Link></li>
        <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/nfts" className="nav-link" onClick={closeMenu}>NFTs</Link></li>
        <li><Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/Buycalapes" className="nav-link" onClick={closeMenu}>BUY $CALAPES</Link></li>
        

        <li className="wallet-menu">
          <button
            onClick={() => {
              if (!walletAddress) {
                connectWallet();
                closeMenu();
              } else {
                toggleDropdown();
              }
            }}
            className="swap-widget__connect-btn"
          >
            {walletAddress ? `Connected: ${getShortenedAddress(walletAddress)}` : "Connect Wallet"}
          </button>

          {isDropdownOpen && walletAddress && (
            <div className="dropdown-menu">
              <button
                onClick={() => {
                  disconnectWallet();
                  toggleDropdown();
                  closeMenu();
                }}
                className="dropdown-item"
              >
                Disconnect
              </button>
            </div>
          )}
        </li>
      </ul>
    
    </nav>
  );
}

export default Navbar;