import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import Footer from '../../Footer';
import qc2 from '../../../Assets/qc2.png'
import './repackingputaway.css'
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
function RepackingPutaway () {
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
     question: "Streamlining Operations and Maximizing Storage Capacity",
     answer: `Say goodbye to wasted storage space and cumbersome searching. Our WMS software's Repacking & Put Away module utilizes intelligent algorithms to allocate the optimal storage location for repacked items. This maximizes your warehouse's storage capacity and minimizes retrieval times, streamlining your operations.`
   },
   {
     question: "Organized Storage & Tracking Efficiency",
     answer: `Take control of your storage areas with our comprehensive location management capabilities. Define and manage location hierarchies, assign specific storage areas for repacked items, and easily track the availability and capacity of each location. No more time wasted on searching for misplaced items.`
   },
   {
    question: "Intelligent Put-Away Strategies",
     answer: `Our software offers a range of intelligent put-away strategies customized to your unique needs. Whether you prefer random put-away, zone-based storage, or dynamic slotting, our module seamlessly implements these strategies. Improve your operational efficiency by leveraging the optimal method for your warehouse.`,
    
   },
   {
    question: "Comprehensive Tasks Assignment",
     answer: `Empower your warehouse operators with clear instructions through our task assignment feature. Our Repacking & Put Away module generates comprehensive tasks displayed on handheld devices or management terminals. These tasks outline the repacked items to be stored and their designated locations, ensuring accuracy and productivity.`,
    
   },
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Optimized Storage Space",
     answeragain: `The Repacking & Put Away module helps you maximize your warehouse's storage capacity by efficiently repacking items and utilizing available space more effectively. With intelligent algorithms and storage allocation strategies, you can avoid wasted space and ensure optimal utilization of every inch of your warehouse.`
   },
   {
     questionagain: "Improved Inventory Accuracy",
     answeragain: `By accurately repacking items and updating packaging information within the WMS software, you can maintain precise inventory records. This reduces the risk of discrepancies, improves inventory accuracy, and enables seamless order fulfilment. Real-time updates ensure that your inventory information remains up to date at all times.`
   },
   {
    questionagain: "Enhanced Operational Efficiency",
     answeragain: `The module streamlines the repacking and put-away processes, reducing manual effort and minimizing errors. With clear instructions and tasks assigned to warehouse operators, you can achieve faster and more accurate handling of repacked items. This results in increased operational efficiency and overall productivity.`,
    
   },
   {
    questionagain: "Faster Order Fulfillment",
     answeragain: `With optimized storage allocation and streamlined processes, locating and retrieving repacked items becomes quicker and easier. Warehouse operators can efficiently access the right items in designated locations, enabling faster order fulfilment and ensuring customer satisfaction with prompt deliveries.`,
    
   },
   {
    questionagain: "Increased Flexibility",
     answeragain: `Repacking & Put Away in WMS provides the flexibility to break down or combine products as needed, allowing you to adapt to changing customer demands and market trends. This flexibility enables you to efficiently manage product variations, bundle products for promotions, or customize orders based on customer preferences.`,
    
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
    <h1 className="about-heading mt-3 PX-5">Repacking & Putaway</h1>
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
       

       <div style={{height:"100vh"}}>
<h1  class="animated-heading">Repacking & Putaway</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span style={{fontSize:"18px"}}>Our cutting-edge PURVEY Warehouse Management System introduces a powerful Repacking & Put Away module designed to optimize your warehouse operations. With our advanced features and user-friendly interface, you can revolutionize your repacking and storage processes for enhanced efficiency and productivity.
      Our Repacking & Put Away module simplifies the repacking process by providing intuitive tools to manage and track repackaged items. Seamlessly break down or combine products, update packaging information, and maintain accurate inventory records. This ensures precision in order fulfilment and inventory management.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={qc2} alt="" style={{height:"80vh",borderRadius:"10px"}}/>
  </div>
</div>

       </div>
       <div style={{ height: "130vh" }} className='fetauresdiv-repackingputaway'>
  <h1 style={{ color: '#C33764' }} className="animated-headings">Features</h1>
  <div className="faqdeconsolidation">
    {faqData.map((faq, index) => (
      <div className="faqContainerdeconsolidation" key={index}>
        <div
          className={`faqQuestiondeconsolidation ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faqQuestionText">
            <h3 style={{ color: "black", fontSize: "inherit" }}>{faq.question}</h3>
          </div>
          <div className="iconinbountdeconsolidation">
            <div
              className={`icon-shape-inbount ${activeIndex === index ? "active" : ""}`}
            ></div>
          </div>
        </div>
        <div
          className="answercontdeconsolidation"
          style={{
            maxHeight: activeIndex === index ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            textAlign: "justify"
          }}
        >
          <div className="answerdeconsolidation">
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
  <div className="faqdeconsolidation">
    {faqDataagain.map((faq, index) => (
      <div className="faqContainerdeconsolidation" key={index}>
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
              <p>{faq.answeragain}</p>
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
  <div class="bx-repackingputaway box-corners-repackingputaway w-100%">
    <div class="cornerrepackingputaway"></div>
    <div class="cornerrepackingputaway"></div>
    <div class="cornerrepackingputaway"></div>
    <div class="cornerrepackingputaway"></div>
    
    <p style={{fontSize:"16px"}}>
    Transform your warehouse into a well-oiled machine with our state-of-the-art Repacking & Put Away module. Experience the benefits of optimized storage space, efficient repacking processes, and increased operational productivity.
  </p>
  </div>
</div>


    {/* ----------------------------------- */}
   

   
  <div className='footer-repacking '>
  <Footer/>
  </div>
        </>
  )
}

export default RepackingPutaway