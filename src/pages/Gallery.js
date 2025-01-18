import React, { useState } from "react";
import './Gallery.css';

function Gallery() {
  // Dynamically import all images from the images directory
  const images = require.context('../gallery-imgs', false, /\.(png|jpe?g|gif)$/);

  // Create an array of image paths
  const imagePaths = images.keys();

  // State to handle the modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);

  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {imagePaths.map((imagePath, index) => (
          <div 
            className="gallery-item" 
            key={index}
            onClick={() => setSelectedImage(images(imagePath))} // Open modal on click
          >
            <img src={images(imagePath)} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;