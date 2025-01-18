import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [telegramName, setTelegramName] = useState("");
  const [reason, setReason] = useState("");
  const [userEmail, setUserEmail] = useState(""); // New state for user email
  const [additionalMessage, setAdditionalMessage] = useState(""); // New state for additional message

  // Toggle the popup visibility
  const handleContactUsClick = () => {
    setPopupOpen(!isPopupOpen); // Toggle the form visibility
  };

  // Handle form field changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleTelegramNameChange = (e) => setTelegramName(e.target.value);
  const handleReasonChange = (e) => setReason(e.target.value);
  const handleUserEmailChange = (e) => setUserEmail(e.target.value); // Handle email field
  const handleAdditionalMessageChange = (e) => setAdditionalMessage(e.target.value); // Handle additional message field

  // Handle the form submission
  const handleSend = (e) => {
    e.preventDefault();
  
    const mailtoLink = `mailto:CALAPESTEAM@OUTLOOK.COM?subject=${encodeURIComponent(
      `Contact from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nTelegram: ${telegramName}\nEmail: ${userEmail}\nReason: ${reason}\nAdditional Message: ${additionalMessage}`
    )}`;
    window.location.href = mailtoLink;
  
    setPopupOpen(false); // Close the popup
  };
  

  // Copy the contract address to clipboard
  const copyToClipboard = () => {
    const contractAddress = "9RGMt6ZWrtybcYt3mup6QBwyz9KtQ4tbx9naNSByPvfx";
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        alert("Contract address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy the address: ", err);
      });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="contactUs-button" onClick={handleContactUsClick}>
          Contact Us
        </button>

        {/* Conditionally render the form if the popup is open */}
        {isPopupOpen && (
          <div className="popup open">
            <div className="popup-content">
              <h2 className="popup-h2">Contact Us</h2>
              <form onSubmit={handleSend}>
              <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    required
                  />
                </label>
                <label>
                  Telegram Name:
                  <input
                    type="text"
                    value={telegramName}
                    onChange={handleTelegramNameChange}
                    placeholder="@TelegramName"
                    required
                  />
                </label>
                <label>
                  Your Email:
                  <input
                    type="email"
                    value={userEmail}
                    onChange={handleUserEmailChange}
                    placeholder="Name@email.com"
                    required
                  />
                </label>
                <label>
                  Reason for Contact:
                  <textarea
                    value={reason}
                    onChange={handleReasonChange}
                    placeholder="Reason..."
                    required
                  />
                </label>
                <label>
                  Additional Message (optional):
                  <textarea
                    value={additionalMessage}
                    onChange={handleAdditionalMessageChange}
                    placeholder="Optional"
                  />
                </label>
                <button type="submit">Send</button>
                <button type="button" onClick={handleContactUsClick}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}

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

        <button onClick={copyToClipboard} className="copy-address-button">
          CA: 9RGM...Pvfx
        </button>
      </div>
    </footer>
  );
}

export default Footer;