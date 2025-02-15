import React, { useState } from 'react';

const ImageSlideshow = () => {
  const images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3',
    'https://via.placeholder.com/600x300?text=Image+4',
    'https://via.placeholder.com/600x300?text=Image+5'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to handle dot click
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ textAlign: 'center', width: '600px', margin: '0 auto' }}>
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={prevImage} style={{ marginRight: '10px' }}>
          Prev
        </button>
        <button onClick={nextImage}>Next</button>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToImage(index)}
            style={{
              width: '10px',
              height: '10px',
              margin: '0 5px',
              borderRadius: '50%',
              backgroundColor: currentImageIndex === index ? '#FF5A3C' : '#ddd',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
