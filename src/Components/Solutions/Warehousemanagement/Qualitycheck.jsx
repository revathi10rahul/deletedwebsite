import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './qualitycheck.css'
import { useState,useEffect,useRef } from 'react';
import Footer from '../../Footer';
import qc2 from '../../../Assets/qc2.png'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
function Qualitycheck () {
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

 const [activeIndex, setActiveIndex] = useState(null);

 const toggleFAQ = (index) => {
   setActiveIndex(activeIndex === index ? null : index);
 };

 const faqData = [
    {
     question: "Detailed Inspection Criteria",
     answer: `The Quality Assurance feature allows you to define detailed inspection criteria for each product, including physical attributes, functional tests, packaging checks, and more. This ensures that every item undergoes thorough inspection before it is shipped, guaranteeing the highest quality and customer satisfaction.`
   },
   {
     question: "Real-Time Visibility into the Quality Status",
     answer: `With our PURVEY WMS, you gain real-time visibility into the quality status of your inventory. You can track and monitor quality checkpoints, identify potential issues, and take proactive measures to resolve them, ensuring that only compliant and high-quality products are dispatched.`
   },
   {
    question: "Generates Automated Quality Alerts",
     answer: `PURVEY WMS generates automated quality alerts whenever a deviation or non-conformance is detected during the inspection process. This enables timely corrective actions, reducing the risk of shipping defective or substandard products and maintaining your reputation for delivering superior quality.`,
    
   },
   {
    question: "Seamless Integration",
     answer: `Our Quality Assurance module seamlessly integrates with various testing equipment, such as scales, scanners, and measuring devices. This ensures accurate measurements and efficient data capture during the inspection process, reducing manual errors and improving efficiency.`,
    
   },
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Enhanced Product Quantity",
     answeragain: `Our Quality Assurance process enables you to maintain strict quality standards for every product leaving your warehouse. By identifying and rectifying any deviations or defects, you can deliver superior quality products to your customers, enhancing their satisfaction and loyalty.`
   },
   {
     questionagain: "Reduced Returns And Complaints",
     answeragain: `With accurate and comprehensive quality control measures in place, you can minimize returns and customer complaints due to substandard or defective products. This saves costs associated with returns processing and improves your overall customer experience.`
   },
   {
    questionagain: "Complains with Regulatios and Standards",
     answeragain: `Our WMS helps ensure compliance with industry regulations and quality standards. By implementing standardized quality assurance procedures, you can meet legal requirements, industry-specific guidelines, and customer expectations for product quality.`,
    
   },
   {
    questionagain: "Increased Operational Efficiency",
     answeragain: `Automation of the quality assurance process streamlines inspection procedures, and improves overall operational efficiency. This allows your team to focus on value-added tasks and optimize productivity.`,
    
   },
   {
    questionagain: "Enhanced Brand Reputation",
     answeragain: `By consistently delivering high-quality products, you can strengthen your brand reputation and differentiate yourself in the market. Positive customer experiences and a reputation for quality contribute to increased customer trust and loyalty.`,
    
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
     <Navbar  className='text-white bg-secondary'  >
        <Container>
        <Navbar.Brand href="#home">
  <img src={nswhite} alt="" style={{height:"60px"}} />
</Navbar.Brand>
          <Nav className="me-right color-white ">
            <Nav.Link style={{color:"white"}} onClick={handleHome}>Home</Nav.Link>
            <Nav.Link style={{color:"white"}} onClick={handleAboutus}>About Us </Nav.Link>
          
                 <NavDropdown
  id="nav-dropdown"
  title={
    <span style={{ color: 'white' }}>
      Products 
    </span>
  }
  className="custom-nav-dropdown"
>
  <NavDropdown.Item onClick={handleFulfillmentautomation}>Fullfillment Automation</NavDropdown.Item>
  <NavDropdown.Item onClick={handleOrdermanagement}>Order Management System</NavDropdown.Item>
  <NavDropdown.Item  onClick={handleWarehousemanagement}>Warehouse Management System</NavDropdown.Item>
</NavDropdown>


  <NavDropdown title={<span style={{ color: 'white' }}>Solutions </span>} id="nav-dropdown-about-us">
  <NavDropdown title="Warehouse Management" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleInbountreceipt}>Inbount Receipt</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCrossdocking}>Cross Docking</NavDropdown.Item>
              
              <NavDropdown.Item >Deconsolidation</NavDropdown.Item>
              <NavDropdown.Item >Quality Assurance</NavDropdown.Item>
              <NavDropdown.Item >Repacking & Putaway</NavDropdown.Item>
              <NavDropdown.Item >Pick Management</NavDropdown.Item>
              <NavDropdown.Item >Dispatch</NavDropdown.Item>
              <NavDropdown.Item >Inventory Management</NavDropdown.Item>
              <NavDropdown.Item >API Integration</NavDropdown.Item>
              <NavDropdown.Item >IOT Integration</NavDropdown.Item>


                </NavDropdown>
                <NavDropdown title="Sales" id="basic-nav-dropdown">
                <NavDropdown.Item >Order Management</NavDropdown.Item>
              <NavDropdown.Item > Quotation Management </NavDropdown.Item>
              <NavDropdown.Item > Returns Management </NavDropdown.Item>
              <NavDropdown.Item > Process Management </NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="AI Powered Multi-Channel Fulfillment" id="basic-nav-dropdown">
                <NavDropdown.Item >Multi-Channel  Integration</NavDropdown.Item>
              <NavDropdown.Item >Order Management System</NavDropdown.Item>
              <NavDropdown.Item >Pick List Generation</NavDropdown.Item>
              <NavDropdown.Item >Pick Sequencing</NavDropdown.Item>
              <NavDropdown.Item >Work Force Management</NavDropdown.Item>
              <NavDropdown.Item >Packing And Shipping</NavDropdown.Item>
              <NavDropdown.Item >Fulfillment Validation</NavDropdown.Item>
              <NavDropdown.Item >E-Commerce Integration</NavDropdown.Item>



                </NavDropdown>
             
            </NavDropdown>
            <Nav.Link style={{color:"white"}}>Case Studies</Nav.Link>
            <Nav.Link style={{color:"white"}}>Blog</Nav.Link>
            <Nav.Link style={{color:"white"}}>Contact us</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
     </div>
  
    <div className="hero-section mt-4">
    <h1 className="about-heading mt-3 PX-5">QUALITYCHECK</h1>
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
<h1  class="animated-heading">QUALITY CHECK</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span style={{fontSize:"18px"}}>Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
      PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={qc2} alt="" style={{height:"80vh",borderRadius:"10px"}}/>
  </div>
</div>

       </div>
       <div style={{ height: "110vh" }}>
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



  <button className="button-fulfillemnt">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Learn More
  </button>
</div>
    {/* ----------------------------------- */}
   

    <div >
  <div class="bx box-corners w-100%">
    <div class="corner"></div>
    <div class="corner"></div>
    <div class="corner"></div>
    <div class="corner"></div>
    
    <p style={{fontSize:"16px"}}>
    Quality Assurance process in our advanced WMS, you can ensure superior product quality, minimize errors, and maintain customer satisfaction. By leveraging our standardized procedures, real-time tracking, and automated alerts, you can streamline your quality control process, reduce returns, and enhance your brand reputation. Choose our WMS to optimize your quality assurance operations and deliver excellence in every shipment.
  </p>
  </div>
  </div>
    
  <Footer/>
        </>
  )
}

export default Qualitycheck