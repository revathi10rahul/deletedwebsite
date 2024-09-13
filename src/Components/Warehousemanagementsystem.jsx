import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import nswhite from "../Assets/nswhite.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./warehousemanagementsystem.css";
import gr from '../Assets/gr.png'
import Footer from "./Footer";

function Warehousemanagementsystem() {
    // window.addEventListener('load', function() {
    //     const heading = document.querySelector('.animate-heading');
    //     heading.classList.add('show');
    //   });
      
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
      question: "Inventory Control",
      answer: `Maintain accurate and real-time visibility of inventory levels, reducing stockouts and overstock situations.`,
    },
    {
      question: "Order Management",
      answer: `Efficiently process and fulfil orders, improving order accuracy and minimizing delays.`,
    },
    {
      question: "Warehouse Optimization",
      answer: `Optimize warehouse space utilization, reducing travel time and improving picking and replenishment processes.`,
    },
    {
      question: "Integration Capabilities",
      answer: `Seamlessly integrate with other business systems, such as ERP and CRM, for streamlined data flow and enhanced collaboration.`,
    },
    {
      question: "Reports and Analytics",
      answer: `Gain valuable insights into warehouse performance through comprehensive reports and analytics, enabling data-driven decision-making.`,
    },
    {
        question: "Mobile Functionality",
        answer: `Empower employees with mobile capabilities for tasks like receiving, picking, and shipping, improving efficiency and accuracy.`,
    },
    {
        question: "Scalability and Flexibility",
        answer: `Adapt the WMS to accommodate increased order volumes, additional warehouse locations, and evolving business needs.`,
      },
      {
        question: "3PL Compatability",
        answer: `Seamlessly collaborate with third-party logistics providers, enhancing coordination and ensuring smooth operations.`,
      },
      {
        question: "Cost Savings",
        answer: `Increase operational efficiency, reduce errors, and minimize labour costs through optimized processes and automation.`,
      },
      {
        question: "Customer Satisfaction",
        answer: `Improve order accuracy, reduce lead times, and enhance overall service levels, leading to higher customer satisfaction.`,
      },
      {
        question: "Regulatory Compliance",
        answer: `Ensure adherence to industry regulations and standards through enhanced traceability and reporting capabilities.`,
      },
      {
        question: "Streamlined Workflows",
        answer: `Automate manual tasks and streamline workflows, reducing human error and improving productivity.`,
      },
      {
        question: "Return  on Investment",
        answer: `Achieve a positive return on investment by optimizing operations, reducing costs, and improving overall efficiency.`,
      },
  ];
  return (
    <>
      <div style={{ height: "40px" }}>
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
              
       <NavDropdown.Item>Deconsolidation</NavDropdown.Item>
                  <NavDropdown.Item>Quality Assurance</NavDropdown.Item>
                  <NavDropdown.Item>Repacking & Putaway</NavDropdown.Item>
                  <NavDropdown.Item>Pick Management</NavDropdown.Item>
                  <NavDropdown.Item>Dispatch</NavDropdown.Item>
                  <NavDropdown.Item>Inventory Management</NavDropdown.Item>
                  <NavDropdown.Item>API Integration</NavDropdown.Item>
                  <NavDropdown.Item>IOT Integration</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sales" id="basic-nav-dropdown">
                  <NavDropdown.Item>Order Management</NavDropdown.Item>
                  <NavDropdown.Item> Quotation Management </NavDropdown.Item>
                  <NavDropdown.Item> Returns Management </NavDropdown.Item>
                  <NavDropdown.Item> Process Management </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="AI Powered Multi-Channel Fulfillment"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>Multi-Channel Integration</NavDropdown.Item>
                  <NavDropdown.Item>Order Management System</NavDropdown.Item>
                  <NavDropdown.Item>Pick List Generation</NavDropdown.Item>
                  <NavDropdown.Item>Pick Sequencing</NavDropdown.Item>
                  <NavDropdown.Item>Work Force Management</NavDropdown.Item>
                  <NavDropdown.Item>Packing And Shipping</NavDropdown.Item>
                  <NavDropdown.Item>Fulfillment Validation</NavDropdown.Item>
                  <NavDropdown.Item>E-Commerce Integration</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link style={{ color: "white" }}>Case Studies</Nav.Link>
              <Nav.Link style={{ color: "white" }}>Blog</Nav.Link>
              <Nav.Link style={{ color: "white" }}>Contact us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="hero-section mt-4">
          <h1 className="about-heading mt-5">WAREHOUSE MANAGEMENT SYSTEM</h1>
          {/* <h3 className="about-heading2 mt-3">FOR A DECADE PLUS</h3> */}
          <div style={{ display: 'block' }} className="mt-3">
            {/* <p className="mt-3">AND OUR FIRST CUSTOMERS ARE WITH US</p>
            <p className="mt-3">TO CELEBRATE OUR MILESTONE</p> */}
          </div>

          <svg viewBox="0 0 1440 319" className="svg-curve">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>


 {/* --------THIRD------------ */}
 <div style={{height:"100vh"}}>
 <h2 class="infinite-animate-heading">Purvey WMS - Your Complete Warehouse Management Solution with 3PL Capability</h2>
 <div class="parent">
  <div class="child">
    <img src={gr} alt="" />
    <br />
    <button className="button-fulfillemnt">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Request Demo
                </button>
  </div>
  <div class="child">
  <p>
  We understand the challenges that come with managing a warehouse. From inventory control to order fulfillment, every aspect of warehouse operations plays a crucial role in the success of your business. That's why we have developed a cutting-edge Warehouse Management System (WMS) to help you optimize your warehouse processes and boost overall efficiency.
  Our WMS is designed to provide a comprehensive solution for all your warehouse management needs. Whether you operate a small-scale facility or a large distribution centre, our scalable and flexible software can be tailored to meet your specific requirements. With Purvey WMS, you can streamline your operations, reduce errors, and enhance productivity, ultimately driving your business towards greater profitability.
  </p>
  </div>
</div>


 </div>


 {/* ---------fourth-------------- */}
<div>
<blockquote className="blockquoteagain">
We recognize the importance of third-party logistics (3PL) providers in the modern supply chain. PURVEY WMS is built with necessary functionalities that empowers effortless computation of charges based on factors such as storage space, cumulative weight of client items, man hours spent on order fulfilment and value-added services.


 
</blockquote>
</div>

{/* --------fifth---------------- */}
<div style={{ height: "100vh" }}>
<h1 style={{color:'#C33764'}}>Value Delivered</h1>
      <div className="faq_main_container">
     
        {faqData.map((faq, index) => (
          <div className="faq_container" key={index}>
            <div
              className={`faq_question ${activeIndex === index ? "active" : ""}`}
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
    <div style={{display:"flex",borderRadius:"5px"}}>
        <h3  style={{color:"#C33764",padding:"50px"}}>Discover how our WMS Software & Fulfillment Automation add value to your business <span className="learnmore">LEARN MORE</span>

</h3>

      </div>
   <Footer/>
      </>
  )
}

export default Warehousemanagementsystem