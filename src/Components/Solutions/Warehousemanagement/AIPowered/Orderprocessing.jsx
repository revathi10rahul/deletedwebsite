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
import './orderprocessing.css'
import Footer from '../../../Footer';
import order_processing from '../../../../Assets/order_processing.jpg'
function Orderprocessing() {
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
      question: "Enhanced Efficiency",
      answer: `AI-powered order synchronization leverages advanced algorithms to intelligently analyse order similarities and content item proximities within the warehouse. By identifying patterns, the system synchronizes multiple orders that share common items or are in close proximity. This synchronization reduces the number of picklists, enabling warehouse staff to complete orders more efficiently.`,
    },
    {
      question: "Reduced Complexity",
      answer: `Traditional order picking processes often result in numerous picklists, walking around multiple times for each pick list, creating complexity and making it challenging for warehouse staff to manage and prioritize tasks. AI-powered order synchronization simplifies the process by consolidating related orders into a single picklist. This consolidation reduces the complexity of order fulfilment, allowing warehouse staff to focus on completing tasks more effectively.`,
    },
    {
      question: "Increased Productivity",
      answer: `By reducing the number of picklists, AI-powered order synchronization optimizes the workflow within the warehouse. Warehouse staff can spend less time managing and switching between picklists, resulting in increased productivity. The streamlined process allows employees to work more efficiently, fulfil orders faster, and meet customer demands effectively`,
    },
    {
      question: "Improved Resoiurce Utilization",
      answer: `AI-powered order synchronization takes into account the proximity of items within the warehouse. By synchronizing orders with similar item locations, the system optimizes the allocation of resources. Warehouse staff can efficiently navigate the warehouse, minimizing travel time and maximizing resource utilization. This optimization results in a more efficient use of labour and equipment, leading to cost savings.   `,
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
        <h1 className="about-heading-multichannel mt-3">ORDER PROCESSING</h1>
        

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
<img src={order_processing} alt="" />
</div>
<div className='second-multi-div'>
<h1>ORDER PROCESSING</h1>
<p>Same day delivery is increasingly becoming normal expectation of customers. With capital scarcity Brick and mortar business are also keen to achieve just-in-time inventory efficiency. In the bustling world of warehouse operations, streamlining processes to maximize efficiency is a top priority. Traditional order picking methods often result in a large number of picklists, leading to increased complexity and reduced productivity. However, with the power of AI-powered order synchronization, organizations can revolutionize their warehouse operations.
Our AI-powered order synchronization, showcases how it optimizes efficiency and effectively reduces the number of picklists, which results in significant reduction of walk around time and increase same day deliveries.</p>
</div>
</div>
</div>

{/* -------------------------------------- */}
<div className='feature-orderprocessing'>
<h1>Feature</h1>
{/* <div className='feature-orderprocessing-div'>
    <div className='first-feature-orderprocessing'>
        <h1>Efficiency & Accuracy</h1>
    </div>
    <div className='second-feature-orderprocessing'>
        <p>Perfect order fulfilment is crucial for maintaining a competitive edge. The key to success lies in implementing a robust multichannel integration in order fulfilment system, which streamlines operations and enhances customer satisfaction. The unique features of our system, demonstrates how it can revolutionize your order fulfilment process.
        The multichannel integration in our fulfilment management system is a game-changer for organizations aiming to enhance operational efficiency. By streamlining order fulfilment across multiple sales channels, you unlock new levels of accuracy, scalability, and flexibility. With real-time inventory visibility and centralized order management, you can meet customer demands effectively while optimizing your resources.</p>
    </div>
</div> */}



<div class="pset">
  <div class="container">
    <div class="row listar-feature-items">

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">


          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Businesses" class="listar-image-icon" src="https://cdn-icons-png.flaticon.com/128/921/921591.png"/>
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop:"0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>01</span>
                  Intelligent Order Analysis </span>
                </div>

                <div class="listar-feature-item-excerpt">
                The AI-powered order synchronization system utilizes advanced algorithms to analyse order similarities and content item proximities within the warehouse. By understanding the relationships between orders and item locations, the system intelligently synchronizes orders to minimize the number of picklists required. </div>

              </div>
            </div>
          </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">

          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank"></a>

          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Customers" class="listar-image-icon" src="https://cdn-icons-png.flaticon.com/512/3414/3414151.png"/>
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop:"0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>02</span>
                  Real-Time Data Integration </span>
                </div>

                <div class="listar-feature-item-excerpt">
                The system seamlessly integrates with existing warehouse management systems, to receive real-time data on order details, item locations, and availability. This integration ensures accurate and up-to-date information, enabling the system to make informed decisions for order synchronization. </div>

              </div>
            </div>
          </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">

          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank"></a>

          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Feedback" class="listar-image-icon" src="https://cdn-icons-png.flaticon.com/512/3412/3412953.png"/>
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop:"0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>03</span>
                  Customizable Synchronization Rules </span>
                </div>

                <div class="listar-feature-item-excerpt">
                The AI-powered order synchronization system considers criteria such as item similarity, item proximity, or order priorities to tailor the synchronization process to their unique needs.</div>

              </div>
            </div>
          </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>
    </div>
  </div>
</div>
</div>
 {/* --------------------------- */}
 <div style={{ height: "50vh" }}>
      <h1 style={{ color: "#C33764" }} className="valuedelivered-orderprocessing">Value Delivered</h1>

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
      <div style={{height:"30vh"}}>
  <div class="bx-orderprocessing box-corners-orderprocessing w-100%">
    <div class="cornerorderprocessing"></div>
    <div class="cornerorderprocessing"></div>
    <div class="cornerorderprocessing"></div>
    <div class="cornerorderprocessing"></div>
    
    <p>
    If you are looking for a way to improve your business's efficiency and profitability, a Multi - Channel Integration system is a valuable tool that can help you achieve your goals.
  </p>
  </div>
  </div>

{/* -------------------------- */}
<div className="discover-orderprocessing">
          <p className="discover-content-orderprocessing">Discover how our WMS Software & Fulfillment Automation add value to your business </p>
          <button className="button-orderprocessing">Contact Us</button>
        </div>

  <Footer/>

    </>
  );
}

export default Orderprocessing;