import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
import './multichannelintegration.css'
import Footer from '../../../Footer';
import multi_channel_integration from '../../../../Assets/multi_channel_intgration.jpg'
function Multichannelintegration() {
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





const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Improved Resource Utilization",
      answer: `By integrating multiple channels into a unified pick management system, you can optimize your resources and reduce operational complexities.`,
    },
    {
      question: "Increased Efficiency",
      answer: `The AI powered automation dynamically manages orders from different channels in one place. You can track order status, monitor assigned resources , their activity and monitor fulfilment progress, all from a single interface. This centralized approach simplifies order processing and minimizes the risk of errors or delays.`,
    },
    {
      question: "Real Time Visibility",
      answer: `While orders across channels are simultaneously processed, the system provides real time visibility of status of orders individually across all channels.`,
    },
    {
      question: "Improved Order Accuracy",
      answer: `Our Bar code/ QR code/ RFID integrated system eliminate the risk of errors and inaccuracies in order fulfilment. The system automatically synchronizes order data from various channels, minimizing the chances of mismatched or duplicate orders.   `,
    },
    {
      question: "Scalability and Flexibility",
      answer: `As your business grows and expands into new sales channels, a multi-channel pick management system can adapt to your evolving needs. It provides the scalability to handle increasing order volumes and the flexibility to incorporate additional channels seamlessly. Whether you sell through online marketplaces, brick-and-mortar stores, or social media platforms, the system can consolidate and manage all orders efficiently.`,
    },
    
  ];



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
 
 {/* -------------------------------------------------------- */}


 <div className="hero-section-multichannel mt-4">
        <h1 className="about-heading-multichannel mt-3">MULTI-CHANNEL INTEGRATION</h1>
        

        <svg viewBox="0 0 1440 319" className="svg-curve-multichannel">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>



{/* ---------------------------------------------- */}
<div style={{height:"80vh"}}>
<div className='multi-div'>
<div className='first-multi-div'>
<img src={multi_channel_integration} alt="" />
</div>
<div className='second-multi-div'>
<h1>MULTI-CHANNEL INTEGRATION</h1>
<p>In today's competitive retail environment, businesses need to be able to offer their customers a seamless shopping experience across multiple channels. This means being able to take orders and fulfil them from any channel, whether it's online, in-store, or over the phone.
Multi-channel integration is the key to providing this seamless experience. It allows businesses to connect their various sales channels to a single fulfilment system. This ensures that inventory levels are always up-to-date and that orders can be picked and packed quickly and efficiently.</p>
</div>
</div>
</div>

{/* -------------------------------------- */}
<div className='feature-multichannel'>
<h1>Feature</h1>
<div className='feature-multichannel-div'>
    <div className='first-feature-multichannel'>
        <h1>Efficiency & Accuracy</h1>
    </div>
    <div className='second-feature-multichannel'>
        <p>Perfect order fulfilment is crucial for maintaining a competitive edge. The key to success lies in implementing a robust multichannel integration in order fulfilment system, which streamlines operations and enhances customer satisfaction. The unique features of our system, demonstrates how it can revolutionize your order fulfilment process.
        The multichannel integration in our fulfilment management system is a game-changer for organizations aiming to enhance operational efficiency. By streamlining order fulfilment across multiple sales channels, you unlock new levels of accuracy, scalability, and flexibility. With real-time inventory visibility and centralized order management, you can meet customer demands effectively while optimizing your resources.</p>
    </div>
</div>
</div>
 {/* --------------------------- */}
 <div style={{ height: "50vh" }}>
      <h1 style={{ color: "#C33764" }} className="valuedelivered-warehouse">Value Delivered</h1>

        <div className="faq_main_container">

          {faqData.map((faq, index) => (
            <div className="faq_container" key={index}>
              <div
                className={`faq_question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq_question-text">
                  <h3 style={{ color: "black" }}>{faq.question}</h3>
                </div>
                <div className="icon ">
                  <div
                    className={`icon-shape ${
                      activeIndex === index ? "active" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === index ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="button-fulfillemnt">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Learn More
        </button>
      </div>
      {/* --------------------- */}
   

{/* -------------------------- */}
<div className="discover-multi">
          <p className="discover-content-multi">Discover how our WMS Software & Fulfillment Automation add value to your business </p>
          <button className="button-multi">Contact Us</button>
        </div>
        <div style={{height:"30vh"}}>
  <div class="bx-multi box-corners-multi w-100%">
    <div class="cornermulti"></div>
    <div class="cornermulti"></div>
    <div class="cornermulti"></div>
    <div class="cornermulti"></div>
    
    <p>
    If you are looking for a way to improve your business's efficiency and profitability, a Multi - Channel Integration system is a valuable tool that can help you achieve your goals.
  </p>
  </div>
  </div>
  <div className='footer'>
<Footer/>
  </div>

    </>
  );
}

export default Multichannelintegration;