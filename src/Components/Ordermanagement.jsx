import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nswhite from "../Assets/nswhite.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./ordermanagement.css";
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
import aporasec3 from "../Assets/aporasec3.jpg";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
function Ordermanagement() {
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
  return (
    <>
      <div style={{ height: "40px" }}>
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
                  <NavDropdown.Item href="#order-management">Order Management</NavDropdown.Item>
                  <NavDropdown.Item href="#quotation-management">Quotation Management</NavDropdown.Item>
                  <NavDropdown.Item href="#returns-management">Returns Management</NavDropdown.Item>
                  <NavDropdown.Item href="#process-management">Process Management</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="AI Powered Multi-Channel Fulfillment" id="basic-nav-dropdown-ai">
                  <NavDropdown.Item href="#multi-channel-integration">Multi-Channel Integration</NavDropdown.Item>
                  <NavDropdown.Item href="#order-management-system">Order Management System</NavDropdown.Item>
                  <NavDropdown.Item href="#pick-list-generation">Pick List Generation</NavDropdown.Item>
                  <NavDropdown.Item href="#pick-sequencing">Pick Sequencing</NavDropdown.Item>
                  <NavDropdown.Item href="#work-force-management">Work Force Management</NavDropdown.Item>
                  <NavDropdown.Item href="#packing-shipping">Packing And Shipping</NavDropdown.Item>
                  <NavDropdown.Item href="#fulfillment-validation">Fulfillment Validation</NavDropdown.Item>
                  <NavDropdown.Item href="#e-commerce-integration">E-Commerce Integration</NavDropdown.Item>
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
        
       
          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={{
              cursor: "pointer",
              color: "white",
              marginLeft: "10px",
              fontSize: "24px",
              paddingRight: "20px",
            }}
          />
        </Navbar.Collapse>
      </Navbar>
      </div>



      <div className="hero-section mt-4">
          <h1 className="about-heading mt-3">ORDER MANAGEMENT SYSTEM</h1>
         
          <div style={{ display: 'block' }} className="mt-3">
           
          </div>

          <svg viewBox="0 0 1440 319" className="svg-curve">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      <div style={{ height: "80vh" }}>  

        {/* ------------------------------- */}
        {/* ------------third-------------- */}
        <div style={{ height: "100vh" }}>
          <h1 className="p-1">Purvey OMS- Order Management System</h1>
          <div className="main-div-ordermanagement" >
            <div
              className="image-div-ordermanagement"
            >
              <img
                src={aporasec3}
                alt="work"
                className="aporasec3"
              />
            </div>
            <div
              className="text-div-ordermanagement"
            >
              <div style={{ display: "block", textAlign: "center" }}>
                <p className="content-fulfillment">
                  Purvey OMS, we understand the unique challenges faced by
                  mobile workforces when it comes to order management. To
                  address these challenges, we have developed a cutting-edge
                  Field Order Management Software that empowers your mobile
                  workforce and streamlines your order processes like never
                  before.{" "}
                </p>
                <button className="button-fulfillemnt">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------- */}
        <div style={{ height: "100vh" }}>
          <h1 className="features-ordermanagement">FEATURES</h1>

          <div  className="features-order-div  mt-5">
          <Card className="card-orderdiv-first" >
  <Card.Body className="cardbody-ordermanagement">
    <Card.Title style={{ color: "#C33764" }}>
      <b>Mobile Order Management</b>
    </Card.Title>
    <Card.Text className="cardtext-ordermanagement">
      Purvey OMS enables your field representatives to manage orders on the go. With our intuitive mobile app, your team can create, track, and update orders directly from their smartphones or tablets. Say goodbye to paper-based processes and embrace digital order management for enhanced speed and accuracy.
    </Card.Text>
  </Card.Body>
</Card>
            <Card className="card-orderdiv-first">
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b>Inventory Management</b> 
                </Card.Title>
                <Card.Text className="cardtext-ordermanagement">
                  Keep track of your inventory in real-time, even when it's in
                  the hands of your field team. Purvey OMS provides visibility
                  into available stock levels, allowing your representatives to
                  check inventory, place orders, and manage stock allocations on
                  the spot. Eliminate the risk of stockouts and ensure accurate
                  inventory management across the entire supply chain.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-orderdiv-first">
              <Card.Body>
                <Card.Title >
                 <b style={{ color: "#C33764" }}> Real Time Order Tracking</b>
                </Card.Title>
                <Card.Text className="cardtext-ordermanagement">
                  Gain real-time visibility into the status of your orders.
                  Purvey OMS provides you with instant updates on order
                  progress, enabling you to monitor each stage from creation to
                  delivery. This visibility allows you to proactively address
                  any issues, improve customer communication, and ensure timely
                  order fulfilment.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div  className="features-order-div mt-3">
            <Card className="cardtext-ordermanagement-seconddiv">
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b> Digital Documentation</b>
                </Card.Title>
                <Card.Text className="cardtext-ordermanagement">
                  Simplify paperwork and documentation processes with Purvey
                  OMS's digital capabilities. Your field representatives can
                  capture electronic signatures, take photos, and attach
                  documents directly within the app. This ensures accurate and
                  organized record-keeping, reducing administrative errors and
                  saving valuable time.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card  className="cardtext-ordermanagement-seconddiv">
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b> Integration Capabilities</b>
                </Card.Title>
                <Card.Text className="cardtext-ordermanagement">
                  Purvey OMS seamlessly integrates with your existing systems,
                  such as CRM and ERP, for smooth data synchronization. This
                  integration eliminates manual data entry and ensures
                  consistency across platforms. Gain a holistic view of your
                  operations by connecting all relevant systems and improving
                  collaboration between field teams and back-office functions.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardtext-ordermanagement-seconddiv">
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                  <b>Scalability and Flexibility</b>
                </Card.Title>
                <Card.Text className="cardtext-ordermanagement">
                  Purvey Field is designed to scale with your business needs.
                  Whether you have a small field team or a large fleet of
                  representatives, our software can adapt to accommodate your
                  workforce size and growing order volumes. Scale up or down
                  effortlessly and continue to streamline your field operations
                  as your business expands.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div></div>
        </div>
      
      </div>
<div className="footer-ordermanagement">
<Footer/>
</div>
    </>
  );
}

export default Ordermanagement;
