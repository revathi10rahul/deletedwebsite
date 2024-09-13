import React, { useRef, useEffect } from 'react';
import './style.css'; // Ensure you have your CSS file linked here
import { Row,Col } from 'react-bootstrap';
import work from '../Assets/work.jpg'
import Book from './Book';
const carData = [
  { id: 1, carName: "R8 GT", carBrand: "Audi", carImage: work ,description: "Audi R8 GT - A powerful and elegant sports car."  },
  { id: 2, carName: "Aventador Ultimae", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg" },
  { id: 3, carName: "M4 CS", carBrand: "BMW", carImage: "https://www.wsupercars.com/thumbnails/BMW/2025-BMW-M4-CS-001.jpg" },
  { id: 4, carName: "Droptail Arcadia", carBrand: "Rolls Royce", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Rolls-Royce-Droptail-Arcadia-001.jpg" },
  { id: 5, carName: "Vantage GT3", carBrand: "Aston Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Aston-Martin-Vantage-GT3-001.jpg" },
  { id: 6, carName: "Vantage", carBrand: "Aston Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Aston-Martin-Vantage-001.jpg" },
  { id: 7, carName: "Huracan", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Lamborghini-Huracan-STO-SC-10-Anniversario-001.jpg" },
  { id: 8, carName: "911 GT3 R", carBrand: "Porsche", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Porsche-911-GT3-R-Rennsport-001.jpg" },
  { id: 9, carName: "Mustang GTD", carBrand: "Ford", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Ford-Mustang-GTD-001.jpg" },
  { id: 10, carName: "SC 63", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Lamborghini-SC63-004.jpg" }
];
const Datacar = [
    { id: 1, carName: "R8 GT", carBrand: "Audi", carImage: work },
    { id: 2, carName: "Aventador Ultimae", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg" },
    { id: 3, carName: "M4 CS", carBrand: "BMW", carImage: "https://www.wsupercars.com/thumbnails/BMW/2025-BMW-M4-CS-001.jpg" },
    { id: 4, carName: "Droptail Arcadia", carBrand: "Rolls Royce", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Rolls-Royce-Droptail-Arcadia-001.jpg" },
    { id: 5, carName: "Vantage GT3", carBrand: "Aston Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Aston-Martin-Vantage-GT3-001.jpg" },
    { id: 6, carName: "Vantage", carBrand: "Aston Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Aston-Martin-Vantage-001.jpg" },
    { id: 7, carName: "Huracan", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Lamborghini-Huracan-STO-SC-10-Anniversario-001.jpg" },
    { id: 8, carName: "911 GT3 R", carBrand: "Porsche", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Porsche-911-GT3-R-Rennsport-001.jpg" },
    { id: 9, carName: "Mustang GTD", carBrand: "Ford", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Ford-Mustang-GTD-001.jpg" },
    { id: 10, carName: "SC 63", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Lamborghini-SC63-004.jpg" }
  ];

const CarGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleScroll = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };

      container.addEventListener('wheel', handleScroll);

      return () => {
        container.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return (
    <>
  <div style={{background:"#e1e1e1"}}>
      <Row>
        <Col lg={1} className="rotated-text-container">
      <span className="rotated-text" style={{color:" #004658",fontSize:"2rem"}}>INDUSTRIES WE SERVE</span>
    </Col>
        <Col lg={11}>
        <div className="outterContainer">
        <div className="containerss" ref={containerRef}>
            {carData.map(car => (
            <img key={car.id} className="imgage" src={car.carImage} alt={`${car.carName}.png`} />
        
            ))}
            {Datacar.map(car => (
            <img key={car.id} className="imgage" src={car.carImage} alt={`${car.carName}.png`} />
            
            ))}
        </div>
      </div>
        </Col>
    </Row>


    </div>
  </>
  );
};

export default CarGallery;
