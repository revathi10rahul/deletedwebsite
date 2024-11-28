import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './fulfillmentautomation.css'
import aporasec2 from '../Assets/aporasec2.jpg'
import aporasec3 from '../Assets/aporasec3.jpg'
import work from '../Assets/work.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import Footer from './Footer';
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
function Fulfillmentautomation() {
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
    question: "Precision Picking, Swift Deliveries: AI Empowered for Excellence",
    answer: `APORA's robust system optimizes your warehouse workflows, reduces errors and provides comprehensive tracking capabilities, and allowing you to monitor progress of each order. Improve your warehouse performance and exceed customer expectations with APORA.`,
  },
  {
    question: "IoT-Driven Validation: Redefining Returns, Standardizing Success",
    answer: `Elevate customer satisfaction and minimize sales return by leveraging APORA's IOT enabled two-step validation process. APORA's advance technology empowers your business to deliver consistently, fostering trust and loyalty among your customer base.`,
  },
  {
    question: "Opti-Pick: Unlocking 200% Efficiency Surge, Normalizing Accomplishment",
    answer: `Optimize warehouse space utilization, reducing travel time and improving picking and replenishment processes.`,
  },

  {
    question: "RSwiftShip: Turbocharging Same Day Deliveries by 100%",
    answer: `APORA's cutting edge AI algorithm offers invaluable optimization throughout every stage of fulfillment. This greatly enhances your warehouse capabilities to handle double the volume of orders and facilitating same day deliveries. With APORA your warehouse gains the necessary tools to meet the growing demand for rapid deliveries and staying ahead in today's competitive market.`,
  }
  
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
    
{/* <div style={{height:"80vh"}}>
<div class="curved-div">
  <h1 style={{fontSize:"100px",marginTop:"20px",padding:"30PX"}}> BRING IN 
  </h1>
  <p className='fs-5'>
 One Of It's Kind Solutions  </p>
  <svg viewBox="0 0 1440 319">
    <path fill="#fff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
</div>
</div> */}
  <div className="hero-section mt-4">
  <h1 style={{fontSize:"100px",marginTop:"20px",padding:"30PX"}}> BRING IN </h1>
          
          <div style={{ display: 'block' }} className="mt-3">
            <p className="mt-3"> One Of It's Kind Solutions</p>
          </div>

          <svg viewBox="0 0 1440 319" className="svg-curve">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
<div style={{ height: "100vh" }}>
  <h1>Apora</h1>
  <h2>The Leading AI-Powered Fulfilment Automation System</h2>
  <div className="heading-fulfillment" > {/* Adjust height to fit the content */}
    <div className='img-div-fulfillment'>
      <img src={work} alt="work" className='img-div' />
    </div>
    <div className='content-div-fulfillment'>
  <div style={{display:"block", textAlign: "center"}}>
    <p className='content-fulfillment'>
      Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.
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

  <div style={{height:"100vh"}}>
    <h1 className='hybrid-heading'>Hybrid Proprietary Methodology, Opti-Pick</h1>
    <div className="heading-fulfillment" > 
    <div className='hybrid-div-fullfillment'>
    <p className='content-fulfillment-hybrid'>
    Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.
    </p>
      
    </div>
    <div style={{ flex: 1,  padding: "20px", display: "flex", alignItems: "center", flexDirection: "column" ,marginTop:"66px"}}>
  <div style={{display:"block", textAlign: "center"}}>
  <img src={aporasec2} alt="work" style={{ width: "100%", height: "70vh", maxHeight: "100%",borderRadius:"10px" }} />
   
  </div>
</div>

    
  </div>
  </div>
  


  {/* ------------third-------------- */}
  <div style={{height:"100vh"}}>
    <h1 className='unlocking-heading'>Unlocking Fulfilment Automation Potential</h1>
    <div className="heading-fulfillment" > 
    <div className='unlocking-img-div'>
    <img src={aporasec3} alt="work" style={{ width: "100%", height: "70vh", maxHeight: "100%",borderRadius:"10px" }} />
    </div>
    <div style={{ flex: 1,  padding: "20px", display: "flex", alignItems: "center", flexDirection: "column" ,marginTop:"66px"}}>
  <div style={{display:"block", textAlign: "center"}}> 
  <p className='content-fulfillment'>
  Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.
    </p>
  </div>
</div>

    
  </div>
  </div>



  {/* --------------------- */}
  <div style={{height:"50vh"}} className='valuedelivereddiv'>
  <h1 className='glass-effect '>Value Delivered</h1>

  <div className="faq-main-container-fulfillment">  
        {faqData.map((faq, index) => (
          <div className="ffaq-container-fulfillment" key={index}>
            <div
              className={`faq_question-fulfillment ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-text-fulfillment">
                <h3 style={{ color: "black" }}>{faq.question}</h3>
              </div>
              <div className="icon ">
                <div className={`icon-shape ${activeIndex === index ? "active" : ""}`}></div>
              </div>
            </div>
            <div
              className="answercont-fulfillment"
              style={{
                maxHeight: activeIndex === index ? `${document.getElementById(`faq-answer-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div className="answer" id={`faq-answer-${index}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div >
  <div class="bx-fulfillment box-corners-fulfillment w-100%">
    <div class="cornerfulfillment"></div>
    <div class="cornerfulfillment"></div>
    <div class="cornerfulfillment"></div>
    <div class="cornerfulfillment"></div>
    
    <p>
    Discover the transformative capabilities of APORA and unlock a new era of efficiency and cost savings. Contact us today to learn more about how APORA can empower your business.
  </p>
  </div>
  </div>

</div>



 




<div className='footer-fulfillment'>
  
<Footer/> 
</div>
</div>



  </>
  )
}

export default Fulfillmentautomation