import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './inboundreceipt.css'
import { useState,useEffect,useRef } from 'react';
import Footer from '../../../Components/Footer';
import container from '../../../Assets/container.jpg'
import seemless_integration from '../../../Assets/seemless_integration.png'
import realtimetracking from '../../../Assets/realtime_trcking.png'
import compilance from '../../../Assets/compilance.png'
import qc from '../../../Assets/qc.png'
import returns from '../../../Assets/return.png'
import insights from '../../../Assets/insights.png'
function Inboundreceipt () {
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
     question: "Seamless integration with supplier systems",
     answer: `PURVEY WMS seamlessly integrates with supplier systems, allowing for automated exchange of information such as purchase orders, advance shipment notifications, and invoices. This integration facilitates smooth communication and enhances supply chain collaboration.`,image:seemless_integration,
   },
   {
     question: "Real-time tracking and visibility",
     answer: `PURVEY WMS provides real-time tracking and visibility into inbound shipments. With detailed information on arrival times, quantities, and product details, you can effectively plan and allocate resources to optimize warehouse operations.`,
     image:realtimetracking,
   },
   {
     question: "Quality control checks",
     answer: `The Inbound Receipt function in PURVEY WMS includes a module of quality control checks built-in. Upon receipt, goods are inspected for quantity accuracy, damage, and compliance with specified standards. Any discrepancies or issues are immediately flagged for resolution.`,
     image:qc,
   },
   {
     question: "Compliance documentation",
     answer: `The Inbound Receipt function in PURVEY WMS ensures compliance. Documentations, including receipts, supplier information, product specifications, and certificates, is automatically generated and readily accessible for audits.`,
     image:compilance,
   },
   {
     question: "Streamlined return processes",
     answer: `In case of discrepancies, damaged goods, or rejections, our WMS facilitates streamlined return processes. The system captures all relevant information, including return reasons and resolutions, allowing for prompt coordination with suppliers and minimizing disruptions in your supply chain.`,
     image:returns,

   },
   {
       question: "Gain valuable insights",
       answer: `You can gain valuable insights into inbound shipments, supplier performance, receipt accuracy, and received product quality, enabling data-driven decision-making.`,
       image:insights
,   },
 
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
    <h1 className="about-heading mt-3">INBOUNT RECEIPT</h1>
    {/* <div className="flex-container">
        <span className='subdivs'>Inbound Receipt</span>
        <span className='subdivs'>Cross Docking</span>
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
<h1  class="animated-heading">INBOUND RECEIPT</h1>

<div class="parent">
<div className={`childone ${isChildOneVisible ? 'visible' : ''}`} ref={childOneRef}>
      <span>The Inbound Receipt process in PURVEY Warehouse Management System (WMS) is designed to eliminate manual errors and reduce processing time.
    Upon arrival, goods are quickly scanned and recorded in the system, ensuring timely updates to inventory levels and enabling real-time visibility.</span>
  </div>
  <div className={`childtwo ${isChildTwoVisible ? 'visible' : ''}`} ref={childTwoRef}>
        <img src={container} alt="" style={{height:"55vh",borderRadius:"10px",border:"5px solid black"}}/>
  </div>
</div>

       </div>
{/* -------------------------------- */}
<div style={{ height: "100vh"  }}>
  <h1 style={{ color: '#ff3c00' }} className="animated-heading">Features</h1>
  <div className="faqinbount">
    {faqData.map((faq, index) => (
      <div className="faqContainerinbount" key={index}>
        <div
          className={`faqQuestioninbount ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faqQuestionText">
            <h3 style={{ color: "black", fontSize: "inherit" }}>{faq.question}</h3>
          </div>
          <div className="iconinbountinbount">
            <div
              className={`icon-shape-inbount ${activeIndex === index ? "active" : ""}`}
            ></div>
          </div>
        </div>
        <div
          className="answercontinbount"
          style={{
            maxHeight: activeIndex === index ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            textAlign: "justify"
          }}
        >
          <div className="answerinbount">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <p>{faq.answer}</p>
              {faq.image && (
                <img
                  src={faq.image}
                  alt="FAQ related"
                  style={{ width: "100%", maxWidth: "300px", padding: "2px", borderRadius: "10px" }}
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
    <div style={{height:"100vh"}}>
    <section class="containerinbount">
    <h1 style={{color:"#ff3c00"}} class="animated-heading">Value Delivered</h1>

<div class="card__container">

  <div class="card__bx card__1">
    <div class="card__data">
      <div class="card__icon">
        <div class="card__icon-bx1">
          <i class="fa-solid fa-pen-ruler"></i>
        </div>
      </div>
      <div class="card__content">
        <h5>Increased Efficiency</h5>
        <p style={{fontSize:"12px"}}>By automating and streamlining the Inbound Receipt process, our PURVEY WMS eliminates manual tasks, reduces processing time, and increases operational efficiency, allowing your warehouse team to focus on higher-value activities.</p>
      </div>
    </div>
  </div>
  <div class="card__bx card__2">
    <div class="card__data">
      <div class="card__icon">
        <div class="card__icon-bx2"><i class="fa-solid fa-code"></i></div>
      </div>
      <div class="card__content">
        <h5>Enhanced Inventory Accuracy</h5>
        <p style={{fontSize:"12px"}}>Real-time tracking, automated documentation, and quality control checks in our WMS ensure accurate inventory records, reducing discrepancies and minimizing stockouts or overstock situations.</p>
       
      </div>
    </div>
  </div>
  <div class="card__bx card__3">
    <div class="card__data">
      <div class="card__icon">
        <div class="card__icon-bx3"><i class="fa-solid fa-rocket"></i></div>
      </div>
      <div class="card__content">
        <h5>Improved Supplier Relationships</h5>
        <p style={{fontSize:"12px"}}>With seamless integration and efficient communication, our WMS fosters stronger supplier relationships. Timely notifications, quick resolutions, and accurate information exchange enhance collaboration and trust.</p>
      </div>
    </div>
  </div>
  <div class="card__bx card__4">
    <div class="card__data">
      <div class="card__icon">
        <div class="card__icon-bx4"><i class="fa-solid fa-rocket"></i></div>
      </div>
      <div class="card__content">
        <h5>Cost Savings</h5>
        <p style={{fontSize:"12px"}}>The Inbound Receipt function in our WMS optimizes inventory levels, reduces holding costs, minimizes stockouts, and streamlines processes. These cost-saving measures improve cash flow and overall supply chain efficiency.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>

</section>

    </div>


    <div style={{height:"60vh" }}>
  <div class="bx box-corners w-100%">
    <div class="corner"></div>
    <div class="corner"></div>
    <div class="corner"></div>
    <div class="corner"></div>
    
    <p>
    PURVEY WMS provides exceptional Inbound Receipt functionality within our advanced Warehouse Management System. With our state-of-the-art technology and commitment to excellence, we guarantee efficient handling, accurate tracking, and streamlined operations for your incoming goods. Partner with us to leverage the power of our WMS and experience enhanced efficiency and improved inventory management in your warehouse.
  </p>
  </div>
  </div>
  <Footer/>
        </>
  )
}

export default Inboundreceipt