import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './crossdocking.css'
import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import crossdoc1 from '../../../Assets/crossdoc1.jpg'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import costreduction from '../../../Assets/costreduction.jpg'
function Crossdocking () {
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

 const [activeIndex, setActiveIndex] = useState(null);

 const toggleFAQ = (index) => {
   setActiveIndex(activeIndex === index ? null : index);
 };

 const faqData = [
   {
     question: "Automated Processing ",
     answer: `The PURVEY WMS cross-docking function automates the entire cross-docking process, from sorting and consolidation to outbound shipping. This eliminates the need for manual intervention, which can significantly reduce processing time.`,image:seemless_integration,
   },
   {
     question: "Hybrid Web & Mobile App Solutions",
     answer: `The PURVEY WMS cross-docking function provides real-time visibility into the status of all cross-docked orders. This allows businesses to track shipments, monitor progress, and receive instant notifications on order fulfilment milestones.`,
     image:realtimetracking,
   },
   {
     question: "Built in Quality Control",
     answer: `The PURVEY WMS cross-docking function includes built-in quality control checks to ensure accuracy and integrity of the goods being processed. Any discrepancies or issues are immediately flagged for resolution, reducing the risk of errors and customer dissatisfaction.`,
     image:qc,
   },
   {
     question: "Data Driven Decision Making ",
     answer: `The PURVEY WMS cross-docking function provides businesses with insights into order processing times, dock utilization, carrier performance, and overall efficiency. This information can be used to identify areas for improvement and make data-driven decisions that can help improve order fulfilment efficiency.`,
     image:compilance,
   },
 
 
 ];




 const [activeIndexagain, setActiveIndexagain] = useState(null);

 const toggleFAQagain = (index) => {
   setActiveIndexagain(activeIndexagain === index ? null : index);
 };

 const faqDataagain = [
   {
     questionagain: "Reduced Inventory Cost ",
     answeragain: `Cross-docking eliminates the need for long-term storage, which can help businesses reduce inventory costs.`,imageagain:costreduction,
   },
   {
     questionagain: "Imporoved Cash Flow",
     answeragain: `Cross-docking can help businesses improve cash flow by reducing the amount of time that goods are tied up in inventory.`,
     imageagain:realtimetracking,
   },
   {
     questionagain: "Increased Customer Satisfaction",
     answeragain: `Cross-docking can help businesses improve customer satisfaction by reducing order fulfilment cycle times and ensuring that customers receive their orders quickly and accurately.`,
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
              
              <NavDropdown.Item onClick={handleDeconsolidation}>Deconsolidation</NavDropdown.Item>
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
    <h1 className="about-heading mt-3 PX-5">CROSS DOCKING</h1>
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
<h1  class="animated-heading">Cross Docking</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span>In today's fast-paced business environment, efficient order fulfilment is critical to success. Customers expect their orders to be processed and delivered quickly and accurately, and businesses that cannot meet these expectations risk losing customers to competitors.
      One way to improve order fulfilment efficiency is to use a cross-docking system. Cross-docking is a process in which incoming goods are sorted and consolidated directly for outbound shipping, without being placed in long-term storage. This can significantly reduce order fulfilment cycle times and improve customer satisfaction.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={crossdoc1} alt="" style={{height:"55vh",borderRadius:"10px",border:"5px solid black"}}/>
  </div>
</div>

       </div>
       <div style={{ height: "100vh" }}>
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
  <div className="faqagain">
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
    PURVEY WMS provides exceptional Inbound Receipt functionality within our advanced Warehouse Management System. With our state-of-the-art technology and commitment to excellence, we guarantee efficient handling, accurate tracking, and streamlined operations for your incoming goods. Partner with us to leverage the power of our WMS and experience enhanced efficiency and improved inventory management in your warehouse.
  </p>
  </div>
  </div>
    
  <Footer/>
        </>
  )
}

export default Crossdocking