import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { useNavigate } from 'react-router-dom';
import './inventorymanagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"; import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import crossdoc1 from '../../../Assets/crossdoc1.jpg'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
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






 const [activeIndex, setActiveIndex] = useState(null);

 const toggleFAQ = (index) => {
   setActiveIndex(activeIndex === index ? null : index);
 };

 const faqData = [
   {
     question: "Efficient Data Capture for Accurate Inventory",
     answer: `Our WMS seamlessly integrates with barcode and RFID technologies, enabling efficient and accurate data capture. You can quickly scan items, update inventory records, and reduce manual errors, resulting in improved inventory accuracy.`,image:seemless_integration,
   },
   {
     question: "Inventory Segmentation for Efficient Organization",
     answer: `With our Inventory Management feature, you can classify and segment your inventory based on various criteria such as product category, SKU, or demand. This enables better organization, optimized storage, and faster retrieval of items, enhancing overall operational efficiency.`,
     image:realtimetracking,
   },
   {
     question: "Automated Replenishment for Optimal Control",
     answer: `PURVEY WMS automates the replenishment process by setting reorder points and triggering alerts when stock levels fall below the defined thresholds. This ensures timely replenishment, minimizes stockouts, and maintains optimal inventory levels.`,
     image:qc,
   },
   {
     question: "Batch & Lot Tracking: Compliance & Efficiency",
     answer: `Our WMS supports batch and lot tracking, allowing you to trace the movement and usage of specific batches or lots of items. This is particularly beneficial for industries with strict compliance requirements or products with expiration dates, ensuring regulatory compliance and minimizing wastage.`,
     image:compilance,
   },
   {
    question: "Cycle Counting & Inventory Management Efficiency",
    answer: `Our Inventory Control feature includes cycle counting functionality, enabling you to conduct periodic stock counts without disrupting daily operations. This ensures ongoing accuracy and helps identify discrepancies for prompt resolution. Additionally, our WMS facilitates efficient management of physical inventory processes, minimizing errors and streamlining reconciliation.`,
    image:compilance,
  },
 
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Accurate Inventory Management",
     answeragain: `Our WMS ensures accurate inventory records and real-time visibility, reducing stock discrepancies, and improving overall inventory accuracy. This enables efficient order fulfilment, minimizes stock outs, and optimizes storage space.`,imageagain:costreduction,
   },
   {
     questionagain: "Increased Operational Efficiency",
     answeragain: `Streamlining inventory management processes through automation and real-time data capture improves operational efficiency. With accurate inventory information readily available, your team can make informed decisions, reduce manual errors, and optimize productivity.`,
     imageagain:realtimetracking,
   },
   {
     questionagain: "Cost Savings",
     answeragain: `By optimizing inventory levels, reducing stockouts, and minimizing excess stock, our Inventory Control feature helps reduce holding costs and improve cash flow. Efficient inventory management leads to cost savings and a better bottom line for your business.`,
     imageagain:qc,
   },
   {
    questionagain: "Enhanced Customer Satisfaction",
    answeragain: `Accurate inventory control ensures accurate order fulfilment, reduces order errors, and improves delivery times. This results in enhanced customer satisfaction, increased loyalty, and a positive brand image.   `,
    imageagain:qc,
  }, {
    questionagain: "Regulatory Compliance",
    answeragain: `Our WMS supports compliance with industry regulations and requirements, such as batch tracking and expiration date management. You can easily track product traceability, ensure adherence to quality standards, and mitigate risks associated with non-compliance.`,
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
    <h1 className="about-heading mt-3 PX-5">INVENTORY MANAGEMENT</h1>
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
<h1  class="animated-heading">INVENTORY MANAGEMENT</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span>We understand the challenges of managing inventory effectively and the impact it has on your business operations. With our comprehensive Inventory Management feature within the PURVEY WMS, you can streamline your inventory management processes, improve accuracy, and gain real-time visibility into your stock levels. Let us guide you through the key features and benefits of our advanced Inventory Control functionality.
      PURVEY WMS provides real-time visibility into your inventory, allowing you to monitor stock levels, track movement, and make informed decisions. You can easily view the quantity, location, and status of each item, ensuring accurate stock management and minimizing stockouts.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={crossdoc1} alt="" style={{height:"55vh",borderRadius:"10px",border:"5px solid black"}}/>
  </div>
</div>

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



 <button className="button-fulfillemnt">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Learn More
  </button>
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
    {/* ----------------------------------- */}
   

    
  <Footer/>
        </>
  )
}

export default Dispatch