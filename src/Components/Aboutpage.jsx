import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";   
import './aboutpage.css'
import Footer from './Footer';
function Navbars() {
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
          <h1 className="about-heading mt-3">WE HAVE BEEN AROUND</h1>
          <h3 className="about-heading2 mt-3">FOR A DECADE PLUS</h3>
          <div style={{ display: 'block' }} className="mt-3">
            <p className="mt-3">AND OUR FIRST CUSTOMERS ARE WITH US</p>
            <p className="mt-3">TO CELEBRATE OUR MILESTONE</p>
          </div>

          <svg viewBox="0 0 1440 319" className="svg-curve">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
 {/* -------------------------------------------------------- */}

<div style={{height:"100vh"}}>
<h1>NACRE SYSTEM</h1>
<p className='content'>We are a leading provider of cutting-edge IT solutions, specializing in AI-powered Warehouse Management Systems (WMS), E-commerce Fulfilment solutions, and 3PL warehouse management. With our innovative technologies and expertise, we empower businesses of all sizes to optimize their operations, enhance productivity, and achieve greater success in today's rapidly evolving digital landscape.
We embrace innovation as a driving force behind our IT solutions. We believe that staying ahead in today's competitive landscape requires a constant focus on advancing technologies and harnessing their full potential. Our commitment to innovation is reflected in our AI capabilities, which form the backbone of our solutions.
</p>
</div>



{/* ---------------------------------------------- */}
<div style={{height:"100vh"}}>
<h1>HOW WE ARE DIFFERENT</h1>
<p className='content-different'>
At Nacre System, we understand that AI is not just a buzzword, but a transformative technology that has the potential to reshape industries. That's why we invest heavily in research and development, continuously enhancing our AI capabilities to stay at the forefront of innovation. By embracing AI, we empower businesses to unlock new opportunities, improve operational efficiency, and achieve sustainable growth in today's digital age. Partner with Nacre System to harness the power of innovation and AI. Together, we can navigate the evolving technological landscape, drive digital transformation, and unlock new horizons of success for your business.
Nacre System takes pride in offering products that possess a unique capability to seamlessly integrate with other ERP (Enterprise Resource Planning), WMS (Warehouse Management System), and OMS (Order Management System) systems. This integration capability sets Nacre System apart from its competitors and provides numerous benefits to businesses. In addition to their exceptional integration capabilities, Nacre System's products also offer the latest technological edge of AI (Artificial Intelligence) and IoT (Internet of Things) without the need for expensive upgrades or replacements of existing systems. This unique feature sets Nacre System apart as a cost-effective solution for businesses seeking to leverage cutting-edge technologies. The advantage of this approach is that we understand the value of preserving existing investments. Our software seamlessly integrates with the existing infrastructure, harnesses the power of AI and IoT without requiring businesses to undergo expensive system upgrades or replacements. This not only minimizes costs but also reduces disruption to day-to-day operations.


</p>
</div>


 
<div className='footer-div'>
  <Footer/>
</div>
    </>
  );
}

export default Navbars;