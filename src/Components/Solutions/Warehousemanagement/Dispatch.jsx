import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './dispatch.css'
import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import crossdoc1 from '../../../Assets/crossdoc1.jpg'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
function Dispatch () {
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
     question: "Order Consolidation",
     answer: `PURVEY WMS enables the consolidation of multiple orders into a single shipment, optimizing packing and reducing shipping costs. By efficiently grouping orders based on predefined criteria, you can streamline the dispatch process and enhance productivity.`,image:seemless_integration,
   },
   {
     question: "Real-Time Inventory Tracking",
     answer: `With our Dispatch Management feature, you gain real-time visibility into your inventory. You can track available stock, allocate items for dispatch, and ensure accurate fulfilment of customer orders, minimizing stockouts and delays.`,
     image:realtimetracking,
   },
   {
     question: "Order Prioritization",
     answer: `PURVEY WMS intelligently prioritizes orders based on predefined rules, customer preferences, or service level agreements. This ensures that urgent or high-priority orders are dispatched promptly, enhancing customer satisfaction and loyalty.`,
     image:qc,
   },
   {
     question: "Carrier Integration ",
     answer: `PURVEY WMS seamlessly integrates with various carriers, enabling efficient coordination and communication. You can easily generate shipping labels, track shipments, and manage carrier-specific requirements, ensuring smooth collaboration and timely deliveries.`,
     image:compilance,
   },
   {
    question: "Route Optimization",
    answer: `Our Dispatch Management functionality includes advanced routing algorithms that optimize the selection of shipping routes. This minimizes transit time, reduces transportation costs, and improves overall delivery efficiency.`,
    image:compilance,
  },
  {
    question: "Proof Of Delivery",
    answer: `PURVEY WMS captures proof of delivery through electronic signature capture or barcode scanning. This provides confirmation of successful deliveries and enables efficient reconciliation of shipments.`,
    image:compilance,
  },
  {
    question: "Reporting & Analytics",
    answer: `Our WMS provides comprehensive reporting and analytics capabilities for dispatch management. You can gain insights into order processing times, delivery performance, carrier performance, and overall dispatch efficiency, empowering data-driven decision-making.`,
    image:compilance,
  },
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Enhanced Order Fulfilment",
     answeragain: `With our Dispatch Management feature, you can streamline your order fulfilment process, reducing lead times and ensuring accurate and on-time delivery. This enhances customer satisfaction and strengthens your competitive advantage.`,imageagain:costreduction,
   },
   {
     questionagain: "Improved Inventory Control ",
     answeragain: `Real-time inventory tracking and order allocation capabilities in PURVEY WMS enable accurate stock management. You can efficiently allocate items for dispatch, reducing stockouts and optimizing inventory levels.`,
     imageagain:realtimetracking,
   },
   {
     questionagain: "Cost Optimization",
     answeragain: `By consolidating orders and optimizing shipping routes, our Dispatch Management feature helps reduce transportation costs and improve operational efficiency. This leads to significant cost savings for your warehouse operations.`,
     imageagain:qc,
   },
   {
    questionagain: "Increased Operational Efficiency",
    answeragain: `Automation of labelling, documentation, and routing processes minimizes manual errors, reduces administrative tasks, and enhances overall operational efficiency. Your team can focus on value-added activities, improving productivity.`,
    imageagain:qc,
  }, {
    questionagain: "Customer Satisfaction and Loyalty",
    answeragain: `Swift and accurate dispatches result in satisfied customers who receive their orders on time. This builds customer trust, encourages repeat purchases, and enhances long-term loyalty.`,
    imageagain:qc,
  },
 
 
 ];









 const childOneRef = useRef(null);
 const childTwoRef = useRef(null);
 const [isChildOneVisible, setIsChildOneVisible] = useState(false);
 const [isChildTwoVisible, setIsChildTwoVisible] = useState(false);

 useEffect(() => {
     const observerOptions = {
         root: null, // Use the viewport as the root
         rootMargin: '0px',
         threshold: 0.1 // Trigger when at least 10% of the element is visible
     };

     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 if (entry.target === childOneRef.current) {
                     setIsChildOneVisible(true);
                 } else if (entry.target === childTwoRef.current) {
                     setIsChildTwoVisible(true);
                 }
             } else {
                 if (entry.target === childOneRef.current) {
                     setIsChildOneVisible(false);
                 } else if (entry.target === childTwoRef.current) {
                     setIsChildTwoVisible(false);
                 }
             }
         });
     }, observerOptions);

     // Observe the child elements
     if (childOneRef.current) observer.observe(childOneRef.current);
     if (childTwoRef.current) observer.observe(childTwoRef.current);

     // Cleanup observer on component unmount
     return () => {
         if (childOneRef.current) observer.unobserve(childOneRef.current);
         if (childTwoRef.current) observer.unobserve(childTwoRef.current);
     };
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
  
    <div className="hero-section mt-4">
    <h1 className="about-heading mt-3 PX-5">DISPATCH MANAGEMENT</h1>
    {/* <div className="flex-container">
        <span className='subdivs'>Inbound Receipt</span>
        <span className='subdivs' onClick={handleCrossdocking}>Cross Docking</span>
        <span className='subdivs'>Deconsolidation [Staging]</span>
        <span className='subdivs'>Quality Check</span>
        <span className='subdivs'>Repacking & Putaway</span>
        <span className='subdivs'>Pick Management</span>
        <span className='subdivs'>Dispatch</span>
        <span className='subdivs'>Inventory Management</span>
        <span className='subdivs'>API Integration</span>
        <span className='subdivs'>IOT Integration</span>
    </div> */}

    <svg viewBox="0 0 1440 319" className="svg-curve">
        <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
    </svg>
</div>
       

       <div style={{height:"80vh"}}>
<h1  class="animated-heading">DISPATCH MANAGEMENT</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span>Welcome to the Dispatch Management functionality in PURVEY, our advanced Warehouse Management System (WMS). We understand the importance of efficient order fulfilment and timely delivery to your customers.
      With our comprehensive Dispatch Management feature, we aim to optimize the dispatch process, enhance visibility, and ensure accurate and swift shipment of goods. Utilizing state-of-the-art technology and advanced capabilities, PURVEY WMS guarantees seamless and efficient dispatch management for your warehouse operations.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={crossdoc1} alt="" style={{height:"55vh",borderRadius:"10px",border:"5px solid black"}}/>
  </div>
</div>

       </div>
      

    {/* ----------------------------------- */}
   

    <div >
 
  </div>



  <div style={{ height: "100vh" }} className='features-inventorymanagement'>
  <h1 style={{ color: '#C33764' }} className="animated-headings">Features</h1>
  <div className="faqcrossdocking">
    {faqData.map((faq, index) => (
      <div className="faqContainercrossdocking" key={index}>
        <div
          className={`faqQuestioncrossdocking ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faqQuestionText">
            <h3 style={{ color: "black", fontSize: "inherit" }}>{faq.question}</h3>
          </div>
          <div className="iconinbountcrossdocking">
            <div
              className={`icon-shape-inbount ${activeIndex === index ? "active" : ""}`}
            ></div>
          </div>
        </div>
        <div
          className="answercontcrossdocking"
          style={{
            maxHeight: activeIndex === index ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            textAlign: "justify"
          }}
        >
          <div className="answercrossdocking">
            <p>{faq.answer}</p>
            {faq.image && (
              <img
                src={faq.image}
                alt="FAQ related"
              />
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

 
  <h1 style={{ color: '#C33764' }} className="animated-headings">Value Delivered</h1>
  <div className="faqagain" >
    {faqDataagain.map((faq, index) => (
      <div className="faqContaineragain" key={index}>
        <div
          className={`faqQuestionagain ${activeIndexagain === index ? "active" : ""}`}
          onClick={() => toggleFAQagain(index)}
        >
          <div className="faqQuestionTextagain">
            <h3 style={{ color: "black", fontSize: "inherit" }}>{faq.questionagain}</h3>
          </div>
          <div className="iconinbountagain">
            <div
              className={`icon-shape-inbount-again ${activeIndexagain === index ? "active" : ""}`}
            ></div>
          </div>
        </div>
        <div
          className="answercontagain"
          style={{
            maxHeight: activeIndexagain === index ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            textAlign: "justify"
          }}
        >
          <div className="answeragain">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <p className='answer-inventorymamagement'>{faq.answeragain}</p>
              {faq.imageagain && (
                <img
                  src={faq.imageagain}
                  alt="FAQ related"
                  style={{ width: "50%", maxWidth: "300px", padding: "2px", borderRadius: "10px" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>



 {/* <button className="button-fulfillemnt">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Learn More
  </button> */}
  <div class="bx-inventorymanagement box-corners-inventorymanagement w-100%">
    <div class="corner-inventorymanagement"></div>
    <div class="corner-inventorymanagement"></div>
    <div class="corner-inventorymanagement"></div>
    <div class="corner-inventorymanagement"></div>
    
    <p style={{fontSize:"16px"}}>
    With PURVEY WMS, you can streamline your inventory management, improve accuracy, and optimize operational efficiency. By leveraging real-time visibility, barcode and RFID integration, and automated replenishment, you can maintain optimal inventory levels, reduce stockouts, and enhance customer satisfaction. Choose our WMS to gain control over your inventory and drive success in your warehouse operations.
  </p>
  </div>
</div>
    <div className='footer-div'>
    <Footer/>
    </div>
 
        </>
  )
}

export default Dispatch