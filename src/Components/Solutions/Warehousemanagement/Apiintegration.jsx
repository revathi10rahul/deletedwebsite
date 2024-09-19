import nswhite from  '../../../Assets/nswhite.png'
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './apiintegration.css'
import { FaChevronDown } from 'react-icons/fa'; // Example icon

import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
import { Navbar, Nav, NavDropdown, Container, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import apibanner from '../../../Assets/apibanner.jpg'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
function Apiintegration () {
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





 const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

 
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
                  <NavDropdown.Item >Pick Sequencing</NavDropdown.Item>
                  <NavDropdown.Item >Work Force Management</NavDropdown.Item>
                  <NavDropdown.Item >Packing And Shipping</NavDropdown.Item>
                  <NavDropdown.Item >Fulfillment Validation</NavDropdown.Item>
                  <NavDropdown.Item >E-Commerce Integration</NavDropdown.Item>
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
    <h1 className="about-heading mt-3 PX-5">API INTEGRATIONS</h1>
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
<h1  class="animated-heading-apiintegration">API INTEGRATIONS</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span>As technology continues to evolve, businesses are seeking ways to enhance their operations, improve connectivity, and drive efficiency. API integration in PURVEY WMS allows seamless communication and data exchange between different systems, enabling you to unlock a wide range of benefits.</span>
      <span>
API integration bridges the gap between your WMS and other systems, such as ERP, CRM, e-commerce platforms, or third-party logistics providers. This enables real-time data synchronization and eliminates manual data entry, ensuring accurate and up-to-date information across all integrated systems. With enhanced connectivity, you can streamline processes, reduce errors, and improve overall efficiency.
</span>
  <span>
  API integration provides scalability and flexibility to adapt to your changing business needs. As your business grows or diversifies, you can easily integrate new systems or applications into your WMS using APIs. This flexibility allows you to expand your capabilities, integrate with new channels, and accommodate evolving business requirements without disrupting your existing operations.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={apibanner} alt="" style={{height:"55vh",borderRadius:"10px",border:"5px solid black"}}/>
  </div>
</div>

       </div>
     
    {/* ----------------------------------- */}
   

    <div >
 
  </div>
    
 <div className='footerdiv'>
 <Footer/>
 </div>
        </>
  )
}

export default Apiintegration