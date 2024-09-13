import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './deconsolidation.css'
import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import deconsolidation from '../../../Assets/deconsolidation.png'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
function Deconsolidation () {
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
     question: "Sorting and Allocating Individual Items  ",
     answer: `Our Deconsolidation Module helps in sorting and allocating individual items based on predefined rules or specific criteria such as SKU, destination, or order number. This ensures accurate placement of items for seamless distribution or storage.`
   },
   {
     question: "Real-Time Verification and Quality Checks",
     answer: `TWith Purvey WMS, you can perform real-time verification and quality control checks on deconsolidated items. This ensures accuracy, reduces discrepancies, and maintains high standards of product quality and integrity.`
   },
   {
     question: "Generation of Labels or Barcodes",
     answer: `The Deconsolidation Module enables the generation and printing of labels or barcodes for deconsolidated items. This ensures proper identification, traceability, and easy tracking throughout the warehouse or supply chain.`
   },
   {
     question: "Appropriate Destination or Storage Location ",
     answer: `Purvey WMS assists in assigning the appropriate destination or storage location for each deconsolidated item. This can be based on predefined rules, order requirements, or customer-specific instructions, ensuring efficient put away and order fulfilment.`
   },
   {
    question: "Generates Detailed Documentation",
    answer: `Our Deconsolidation Module generates detailed documentation and reports related to the deconsolidation process. This includes records of received items, destination assignments, discrepancies, and any other relevant information for audit purposes or performance analysis.`
  },
 
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Streamlined Operations ",
     answeragain: `With Purvey WMS's Deconsolidation Module, you can streamline your warehouse operations by reducing the time and effort required to break down consolidated shipments. This results in faster order processing and improved overall efficiency.`
   },
   {
     questionagain: "Enhanced Inventory Control",
     answeragain: `Accurate sorting, tracking, and inventory updates provided by our module contribute to improved inventory control. You can reduce stockouts, minimize excess inventory, and ensure optimal stock management throughout your warehouse.`
   },
   {
    questionagain: "Increased Accuracy",
     answeragain: `By leveraging the automation and verification capabilities of Purvey WMS, you can significantly reduce errors in the deconsolidation process. This leads to enhanced accuracy, reducing the risk of misplacements or shipping incorrect items.`,
    
   },
   {
    questionagain: "Improved Customer Satisfaction",
     answeragain: `Efficient deconsolidation with Purvey WMS means faster order fulfilment and accurate deliveries. This translates into improved customer satisfaction, as orders are processed promptly, and products reach customers in a timely manner.`,
    
   },
   {
    questionagain: "Scalability And Integration",
     answeragain: `Our Deconsolidation Module seamlessly integrates with other modules within Purvey WMS and can scale alongside your growing business needs. Whether you handle a few shipments or high volumes, our software adapts to support your requirements.`,
    
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
    <h1 className="about-heading mt-3 PX-5">DECONSOLIDATION</h1>
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
<h1  class="animated-heading">DECONSOLIDATION</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span style={{fontSize:"18px"}}>Purvey WMS's Deconsolidation Module, is an essential component of our advanced Warehouse Management System. Designed to streamline the process of breaking down consolidated shipments, our module enables efficient sorting, labelling, and allocation of individual items or smaller units. With Purvey WMS, you can optimize your deconsolidation operations, reduce processing time, and ensure accurate distribution to their respective destinations or storage locations.
      Purvey WMS simplifies the unpacking and unloading process of consolidated shipments. The software provides clear guidance to warehouse staff, ensuring that items are efficiently unpacked and ready for further processing.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={deconsolidation} alt="" style={{height:"80vh",borderRadius:"10px"}}/>
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
    Purvey WMS's Deconsolidation Module empowers your warehouse operations with efficient and accurate breakdown of consolidated shipments. By utilizing our software, you can optimize your deconsolidation processes, improve inventory control, and enhance customer satisfaction. Choose Purvey WMS to streamline your operations and achieve greater efficienc
  </p>
  </div>
  </div>
    
  <Footer/>
        </>
  )
}

export default Deconsolidation