// Example.jsx
import React from 'react';
import work2 from '../Assets/work2.webp'
const Example = ({ src, alt = 'Image' }) => (
  <img src={work2} alt={alt} className="carousel-image" />
);

export default Example;
