// ExampleCarouselImage.jsx
import React from 'react';
import work from '../Assets/work.jpg'
const ExampleCarouselImage = ({ src, alt = 'Image' }) => (
  <img src={work} alt={alt} className="carousel-image" />
);

export default ExampleCarouselImage;
