import React from 'react'
import './newdesign.css'
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import cuttingedge from '../Assets/cuttingedge.webp'
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import WH from '../Assets/WH-Homepage.png'
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../Assets/nswhite.png'
import tpl from '../Assets/tpl.jpg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import work from '../Assets/work.jpg'
import { useState,useEffect,useRef } from 'react';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import man from '../Assets/man.jpg'
import oncloud from '../Assets/oncloud.jpg'
import work3 from '../Assets/work3.jpg'
import Book from './Book';
import CarGallery from './Cargallery';
import homefix from '../Assets/homefix.jpg'
import pharma from '../Assets/pharma.png'
import apparel from '../Assets/apparel.jpg'
import FB from '../Assets/FB.jpg'
import cpg from '../Assets/cpg.jpg'
const carData = [
  { id: 1, carName: "R8 GT", carBrand: "Audi", carImage: homefix, description: "HOMEFIX" },
  { id: 2, carName: "Aventador Ultimae", carBrand: "Lamborghini", carImage: pharma, description: "PHARMA" },
  { id: 3, carName: "M4 CS", carBrand: "BMW", carImage: apparel, description: "APPAREL" },
  { id: 4, carName: "Droptail Arcadia", carBrand: "Rolls Royce", carImage: FB, description: "FB" },
  { id: 5, carName: "Vantage GT3", carBrand: "Aston Martin", carImage: cpg, description: "FMCG" }
];

function Navbars() {
  const navigate=useNavigate()
  const handleAboutus=()=>{
      navigate('/about')
  }
  const handleHome=()=>{
      navigate('/')
  }
const handleFulfillmentautomation=()=>{
navigate('/fulfillmentautomation')
}

const handleOrdermanagement=()=>{
navigate('/ordermanagement')
}
const handleWarehousemanagement=()=>{
navigate('/warehousemanagement')
}
const handleInbountreceipt=()=>{
navigate('/inboundreceipt')
}
const handleCrossdocking=()=>{
navigate('/crossdocking')
}
const handleDeconsolidation=()=>{
navigate('/deconsolidation')
}
const handleDispatch =()=>{
  navigate('/dispatch')
}

const handleInventorymanagement=()=>{
navigate('/inventorymanagement')
}

const handleApiintegration=()=>{
navigate('/apiintegration')
}
const handleQualityassurance=()=>{
navigate('/qualitycheck')
}
const handleRepackingPutaway=()=>{
navigate('/repackingputaway')
}
const handlePickmanagement=()=>{
navigate('/pickmanagement')
}
const handleIOTIntegration=()=>{
navigate('/iotintegration')
}

const handleMultichannel=()=>{
  navigate('/multichannelintegration')
}
const handleOrderprocessing=()=>{
  navigate('/orderprocessing')
}
const handlePicklistgen=()=>{
  navigate('/picklistgeneration')
}

const handlePicksequencing=()=>{
  navigate('/picksequencing')
}
const handleWorkforcemanagement=()=>{
  navigate('/workforceoptimization')
}
const handlePackingandshipping=()=>{
  navigate('/packageandshipping')
}
const handleFulfillmentvalidation=()=>{
  navigate('/fulfillmentvalidation')
}
const handleEcommerceintegration=()=>{
  navigate('/ecommerceintegration')
}

const imagesAndTexts = [
  {
   src:work,
    title: 'PURVEY WMS',
    subtitle: 'Warehouse Management System',
    description: 'Ensure 100 % Traceability of Goods Empower Your Business with Real-Time Inventory Insights Streamline Inventory, Slash Operational Costs',
  },
  {
   src:man,
    title: 'ON CLOUD',
    subtitle: 'Scale your resources as needed',
    description: 'Embrace elastic scalability without capital spend Save up to 50% on IT costs.90% of SaaS users find it easy to use SaaS is as secure as on-premises software',
  },
  {
    src:work3,
    title: 'APORA',
    subtitle: 'AI Powered Fulfillment Automation',
    description: 'Save 60 % On Fulfillment Cost Achieve 50 % - 60 % Increase In Efficiency Accomplish 100% Same Day Delivery',
  },
];  



const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndTexts.length);
  }, 5000); // Change image every 5 seconds

  return () => clearInterval(intervalId); // Cleanup on unmount
}, []);

const { src,title, subtitle, description } = imagesAndTexts[currentIndex];

const containerRef = useRef(null);

// Scroll left function
const scrollLeft = () => {
  containerRef.current.scrollBy({
    left: -300, // Adjust the value based on the scroll amount you want
    behavior: 'smooth',
  });
};

// Scroll right function
const scrollRight = () => {
  containerRef.current.scrollBy({
    left: 300, // Adjust the value based on the scroll amount you want
    behavior: 'smooth',
  });
};
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
     <div style={{height:"40px"}}>
     <Navbar collapseOnSelect expand="sm" variant="tabs" className="navbar" style={{fontSize:'14px',zIndex:"9999"}}>
        <Navbar.Brand href="/#/">
          <img
            src={nswhite}
            alt="logo"
            style={{ width: "108px", height: "40px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{ color: "white" }}
              onClick={handleHome}
            >
             Home 
            </Nav.Link>
            <Nav.Link onClick={handleAboutus}
              style={{ color: "white" }}
              
            >
             About Us 
            </Nav.Link>
            <NavDropdown    title={
    <span className="dropdown-title">
      Product <FaChevronDown className="dropdown-icon" />
    </span>
  } id="nav-dropdown">
              
              <NavDropdown.Item onClick={handleFulfillmentautomation}>
                {" "}
               Fulfillment Automation
              </NavDropdown.Item>
                
              <NavDropdown.Item onClick={handleOrdermanagement}>
                {" "}
                Order Management System
              </NavDropdown.Item>
                 
              <NavDropdown.Item onClick={handleWarehousemanagement}>
                {" "}
               Warehouse Management System
              </NavDropdown.Item>
                   
              
                   
            </NavDropdown>
           
            
            <NavDropdown  title={
    <span className="dropdown-title">
      Solutions <FaChevronDown className="dropdown-icon" />
    </span>
  }id="nav-dropdown-solutions">
                <NavDropdown title="Warehouse Management" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleInbountreceipt}>Inbound Receipt</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleCrossdocking}>Cross Docking</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleDeconsolidation}>Deconsolidation</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleQualityassurance}>Quality Assurance</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleRepackingPutaway}>Repacking & Putaway</NavDropdown.Item>
                  <NavDropdown.Item onClick={handlePickmanagement}>Pick Management</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleDispatch}>Dispatch</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleInventorymanagement}>Inventory Management</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleApiintegration}>API Integration</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleIOTIntegration}>IOT Integration</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Sales" id="basic-nav-dropdown-sales">
                  <NavDropdown.Item >Order Management</NavDropdown.Item>
                  <NavDropdown.Item >Quotation Management</NavDropdown.Item>
                  <NavDropdown.Item >Returns Management</NavDropdown.Item>
                  <NavDropdown.Item >Process Management</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="AI Powered Multi-Channel Fulfillment" id="basic-nav-dropdown-ai">
                  <NavDropdown.Item onClick={handleMultichannel}>Multi-Channel Integration</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleOrderprocessing}>Order Processing</NavDropdown.Item>
                  <NavDropdown.Item onClick={handlePicklistgen}>Pick List Generation</NavDropdown.Item>
                  <NavDropdown.Item onClick={handlePicksequencing}>Pick Sequencing</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleWorkforcemanagement}>Work Force Management</NavDropdown.Item>
                  <NavDropdown.Item onClick={handlePackingandshipping}>Packing And Shipping</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleFulfillmentvalidation}>Fulfillment Validation</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleEcommerceintegration}>E-Commerce Integration</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
          
            <Nav.Link
              className="rotate-on-hover"
              id="nav-dropdown"
              
            >
             
            </Nav.Link>
          
          
            <Nav.Link
              style={{ color: "white" }}
              
            >
              Case Studies
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              
            >
             Blog
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              
            >
             Contact Us
            </Nav.Link>
          </Nav>
        
       
         
        </Navbar.Collapse>
      </Navbar>
     </div>
  
     <div className="hero-section-homepage mt-4">
          

          <svg viewBox="0 0 1440 319" className="svg-curve">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <Row>
    <Col lg={1}></Col>
    <Col lg={4} style={{marginTop: "20px",
                marginLeft: "2px"}}>
   
   <img   src={src} 
              alt={subtitle}   className='sideimage-homepage' />

  
    </Col>
    <Col lg={6} className='main-heading-homepage'>
        <div  className='heading-homepage'>
          <h1  className='h1-homepage'>{title}</h1>
          <h4 style={{ color: 'white', }}>{subtitle}</h4>
          <b style={{ color: 'white'}} className='bold-heading'>{description}</b>
        </div>
      </Col>
  </Row>
        </div>

  
{/* --------------------------------------------------- */}


<div style={{height:"100vh"}}>
<h1>Revolutionize Warehouse Operations With Our AI-Driven Software,
Enabling Efficient Management & Lightning-Speed E-Commerce Fulfillment</h1>
<div className='homepage-three-divs'>
<div className='homepage-first-div'>
<p>
AI-Driven Inventory Management: Automate inventory tracking, replenishment, ensuring optimal stock levels and minimizing stock outs.
</p>

<p>Streamlined Order Processing: Seamlessly process and prioritize orders, ensuring accurate and timely fulfilment while reducing manual errors.</p>

<p>Intelligent Warehouse Optimization: Optimize your warehouse layout, picking routes, and storage allocation for improved efficiency and reduced labour costs.</p>
</div>
<div className='homeage-second-div rotating-gradient-container' >
<img src={WH} alt=""className='wh-image-homepage'/>
</div>
<div className='homepage-third-div'>
<p>Real-Time Analytics: Gain actionable insights with advanced analytics and reporting, enabling data-driven decision-making for continuous improvement.</p>
<p>Seamless Integration: Integrate with popular e-commerce platforms, enabling synchronized inventory updates, order management, and real time order fulfillment tracking.</p>
<p>Upgrade to Cutting Edge AI & IOT Solutions: Leverage legacy system integration capability to minimize expensive upgrades or new implementations.</p>
</div>
</div>

<button className='homepage-button'>Request Demo</button>
</div>


{/* ------------------------------------------------------- */}

<div className='cuttingedge-div'>
<h1 className='cuttingedge-heading'>Cutting - Edge AI Technology </h1>          
          <div className='cuttingedge-content'/>
            

    <p style={{textAlign:"justify",padding:"20px"}} >At Nacre System, we have built our expertise in developing and delivering AI-powered automations specifically designed for warehouse management solution. With years of industry experience and a team of skilled professionals, we are committed to revolutionizing warehouse operations through cutting-edge AI technology.

Our AI-powered solutions bring a new level of efficiency, accuracy, and optimization to warehouse automation processes. By leveraging advanced machine learning algorithms, predictive analytics, and intelligent automation, we enable businesses to streamline their operations, reduce costs, and maximize productivity.

We have a deep understanding of the unique challenges faced by warehouses, including inventory management, order processing, picking and packing, and logistics optimization. Our AI algorithms analyse large volumes of data in real-time, identifying patterns and trends to optimize inventory levels and First of its kind intelligent order fulfilment Automation.

With our expertise in AI-powered solutions, we empower warehouses to make data-driven decisions, optimize workflows, and enhance overall operational efficiency. By automating tasks, reducing manual errors, and providing real-time insights, we enable businesses to meet customer demands promptly and accurately, resulting in improved customer satisfaction and loyalty.

We continually invest in research and development to stay at the forefront of AI technology and ensure that our solutions evolve with the changing needs of the industry. Our commitment to innovation and customer-centric approach sets us apart as a trusted partner for companies seeking to transform their warehouse processes using our AI-powered warehouse management software.

Partner with us to unlock the full potential of your warehouse operations and gain a competitive edge in today's dynamic business landscape. Experience the power of AI in driving operational excellence and achieving unparalleled efficiency in your warehouse management endeavours with our warehouse automation software. </p>
</div>








<div>
  <h1 className='oncloud-heading'>ON CLOUD</h1>
<div className="heading-fulfillment"> {/* Adjust height to fit the content */}
    <div style={{ flex: 1, padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={oncloud} alt="work" style={{ width: "100%", height: "70vh", maxHeight: "100%",borderRadius:"10px" }} />
    </div>
    <div style={{ flex: 1,  padding: "20px", display: "flex", alignItems: "center", flexDirection: "column" ,marginTop:"30px"}}>
  <div style={{display:"block", textAlign: "center"}}>
    <p className='content-fulfillment' style={{textAlign:'justify'}}>
    The "On Cloud" is a cutting-edge technology that revolutionizes the way businesses operate in the digital age. Built on the foundation of cloud computing, our innovative solutions offer a multitude of key value propositions, empowering organizations to thrive in today's competitive landscape. Our "On Cloud" eliminates the burden of complex and costly on-premises software installations. With no need for extensive hardware investments or intricate infrastructure setups, businesses can easily access the software and experience the flexibility and convenience of cloud-based technology. This not only saves valuable resources but also enables seamless scalability, allowing businesses to grow and adapt without the constraints of physical limitations.

"On Cloud" is its inherent scalability and agility. As businesses evolve, so do their needs. The solution seamlessly accommodates changing requirements, enabling organizations to effortlessly scale up or down as demand fluctuates. This flexibility is especially vital for mid-size distribution centers, warehouses and fulfilment centers, as it empowers them to handle seasonal peaks and effectively respond to market shifts, ensuring optimal operational efficiency and customer satisfaction.

With robust security measures and reliable data backups, "On Cloud" prioritizes data protection and business continuity. The remarkable capability of "On Cloud" lies in its seamless integration with devices and existing legacy software systems, ensuring effortless connectivity and interoperability.

Embrace the future of business operations with "On Cloud" - a revolutionary platform that offers Purvey, a Warehouse Management System (WMS), and APORA, a Multi-channel fulfilment automation solution. These scalable, cost-effective, secure, and convenient solutions are delivered through Software as a Service (SaaS). Unlock your organization's true potential and gain a competitive edge in the digital era with this game-changing platform.
    </p>
    <button className='button-fulfillemnt'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Request Demo
    </button>
  </div>
</div>

    
  </div>
</div>

<div >
     
        <div>
       
          <div className="outterContainer">
        <h1 style={{color:"#C33764"}} className='industries-heading'>Industries We Serve</h1>

      

        <div className="containerss" ref={containerRef}>
          {carData.map(car => (
            <div key={car.id} className="carCard">
              <img className="imgage" src={car.carImage} alt={`${car.carName}.png`} />
            
                <p><b>{car.description} </b></p>
            
            </div>
          ))}
        </div>

      
        </div>

        </div>
        <Footer/>
    </div>


 




    </>
  );
}

export default Navbars;