import React from "react";
import { Row, Col } from "react-bootstrap";
import APORA from "../Assets/APORA-banner.png";
import papar from "../Assets/papar.jpg";
import "./homepage.css";
import Navbars from "../Navbar/Navbar";
// import Home from './Home'
import { useState, useEffect } from "react";
import work4 from "../Assets/work4.jpg";
import work from "../Assets/work.jpg";
import WH from "../Assets/WH-Homepage.png";
import Cargallery from "./Cargallery";
import Book from "./Book";
import Cardflip from "./Cardflip";
import Oncloud from "./Oncloud";
import Footer from "./Footer";

const contentData = [
  {
    title: "PURVEY",
    subtitle: "WMS",
    description: `
        Ensure 100% Traceability of Goods
        Empower Your Business with Real-Time Inventory Insights
        Streamline Inventory, Slash Operational Costs
        ON CLOUD
        Embrace elastic scalability without capital spend
        Save up to 50% on IT costs.
      `,
    image1: APORA,
    image2: papar,
  },
  {
    title: "ON",
    subtitle: "CLOUD",
    description: `
        Embrace Elastic Scalability Without Capital Spend
      Save up to 50% on IT costs.  
        90% of SaaS users find it easy to use
      SaaS is as secure as on-premises software.
      `,
    image1: work4,
    image2: papar,
  },
  {
    title: "APORA",
    subtitle: "AI Powered Fulfillment Automation",

    description: `
      
        Save 60 % On Fulfillment Cost
      Achieve 50 % - 60 % Increase In Efficiency
      Accomplish 100% Same Day Delivery.
      `,
    image1: work,
    image2: papar,
  },
  // Add more contentData objects as needed
];
function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000); // Change the interval duration as needed (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbars />
      <Row>
        <Col lg={6}>
          <div className="full-height">
            <h1 className="purveyimg animate-from-bottom">
              {contentData[currentIndex].title}
            </h1>
            <h2 className="wmsimg animate-from-bottom">
              {contentData[currentIndex].subtitle}
            </h2>
            <h6 className="content animate-from-bottom">
              {contentData[currentIndex].description
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h6>
          </div>
        </Col>
        <Col lg={6}>
          <div className="full-height">
            <div style={{ textAlign: "center" }}>
              <div className="divforsection">
                <div className="bg">
                  <img src={contentData[currentIndex].image1} alt="" />
                </div>
                <div className="paper">
                  <img src={contentData[currentIndex].image2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* --------------------------------------------------------------------------------------------------- */}
      <div style={{ height: "100vh" }}>
        <header class="header">
          <h1 class="header_title">
            <span>R</span>
            <span>e</span>
            <span>v</span>
            <span>o</span>
            <span>l</span>
            <span>u</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>i</span>
            <span>z</span>
            <span>e</span> <span> </span>
            <span>W</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>h</span>
            <span>o</span>
            <span>u</span>
            <span>s</span>
            <span>e</span> <span> </span>
            <span>O</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>s</span> <span> </span>
            <span>W</span>
            <span>i</span>
            <span>t</span>
            <span>h</span> <span> </span>
            <span>O</span>
            <span>u</span>
            <span>r</span> <span> </span>
            <span>A</span>
            <span>I</span>
            <span>-</span>
            <span>D</span>
            <span>r</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            <span>n</span> <span> </span>
            <span>S</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
          </h1>

          <h6 class="header_description">
            Enabling Efficient Management & Lightning-Speed E-Commerce
            Fulfillment
          </h6>
        </header>
        <Row>
          <Col lg={3}>
         <div class="alignment justify" style={{display:"flex"}}>
<span style={{ color: "blue" }}>&#9635; </span> <p class="match-parent">
AI-Driven Inventory Management: Automate inventory tracking, replenishment, ensuring optimal stock levels and minimizing stock outs.
    </p>
  </div>
<div class="alignment justify" style={{display:"flex"}}>
<span style={{ color: "blue" }}>&#9635; </span> <p class="match-parent">
Streamlined Order Processing: Seamlessly process and prioritize orders, ensuring accurate and timely fulfilment while reducing manual errors.
    </p>
  </div>
            <p class="animated fadeIn" style={{ padding: "10px" }}>
              <span style={{ color: "blue" }}>&#9635;</span> Intelligent
              Warehouse Optimization: Optimize your warehouse layout, picking
              routes, and storage allocation for improved efficiency and reduced
              labour costs.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src={WH}
              alt=""
              class="animated fadeIn"
              style={{ height: "auto", width: "100%" }}
            />
          </Col>
          <Col lg={3}>
            <p class="animated fadeIn" style={{ padding: "10px" }}>
              <span style={{ color: "blue" }}>&#9635;</span> Real-Time
              Analytics: Gain actionable insights with advanced analytics and
              reporting, enabling data-driven decision-making for continuous
              improvement.
            </p>
            <p class="animated fadeIn" style={{ padding: "10px" }}>
              <span style={{ color: "blue" }}>&#9635;</span> Seamless
              Integration: Integrate with popular e-commerce platforms, enabling
              synchronized inventory updates, order management, and real time
              order fulfillment tracking.
            </p>
            <p class="animated fadeIn" style={{ padding: "10px" }}>
              <span style={{ color: "blue" }}>&#9635;</span> Upgrade to Cutting
              Edge AI & IOT Solutions: Leverage legacy system integration
              capability to minimize expensive upgrades or new implementations.
            </p>
          </Col>
        </Row>
      </div>

      <div style={{ height: "100vh" }}>
        <Book />
      </div>
      <div style={{ height: "100vh" }}>
        <Oncloud />
      </div>
      <div style={{ height: "100vh" }}>
        <Cardflip />
      </div>
      <div style={{ height: "100vh" }}>
        <div>
          {" "}
          <Cargallery />
        </div>
      </div>
      <div style={{ height: "50vh" }}>
        <div>
          {" "}
          <Footer />
        </div>
      </div>

      {/* <Home/> */}
    </div>
  );
}

export default Homepage;

// import Carousel from 'react-bootstrap/Carousel';
// import work3 from '../Assets/work3.jpg'
// import work from '../Assets/work.jpg'
// import work4 from '../Assets/work4.jpg'
// import Navbars from '../Navbar/Navbar';
// function DarkVariantExample() {
//   return (
//     <>
//     <Navbars/>
//     <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//            style={{height:"100vh",width:"100%"}}
//           src={work4}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//            style={{height:"100vh",width:"100%"}}
//           src={work3}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           style={{height:"100vh",width:"100%"}}
//           src={work}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </>
//   );
// }

// export default DarkVariantExample;
