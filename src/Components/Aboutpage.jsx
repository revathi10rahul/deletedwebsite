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

const handleMultichannel=()=>{
  navigate('/multichannelintegration')
}
const handleOrderprocessing=()=>{
  navigate('/orderprocessing')
}
const handlePicklistgen=()=>{
  navigate('/picklistgeneration')
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
  
     <div className="hero-section-aboutpage mt-4">
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
Artificial Intelligence (AI) lies at the core of our systems, enabling us to provide intelligent and data-driven solutions to our clients. Through the power of AI, we empower businesses to make smarter decisions, automate processes, and unlock hidden insights within their operations. By leveraging machine learning algorithms, predictive and natural language processing, we enable businesses to optimize their warehouse management, e-commerce operations, and 3PL logistics.
With our AI-powered Warehouse Management Systems (WMS), we revolutionize the way businesses manage their inventory, optimize order fulfilment, and streamline their warehouse operations. Our WMS utilizes advanced algorithms to optimize storage space allocation and adapting to real-time information. Our WMS ensures that businesses achieve maximum efficiency, reduce errors, and deliver exceptional customer experiences.
In the realm of e-commerce, our AI capabilities enable businesses to Process orders in the most efficient way, improve accuracy in order fulfilment and exponentially increase same day delivery capability. For 3PL providers, our AI-driven solutions optimize operational efficiency, enhance transparency, and improve customer satisfaction. By harnessing the power of AI, we help 3PL companies streamline their processes, reduce costs, and provide superior service to their clients.
</p>
</div>



{/* ---------------------------------------------- */}
<div style={{height:"100vh"}}>
<h1 className='second-heading-aboutpage'>HOW WE ARE DIFFERENT</h1>
<p className='content-different'>
At Nacre System, we view AI as a transformative technology with the power to reshape industries. Our significant investment in research and development ensures we stay at the forefront of innovation. By leveraging AI, we help businesses unlock new opportunities, enhance operational efficiency, and drive sustainable growth in the digital age. Partner with Nacre System to navigate the evolving technological landscape and achieve success.

Our products are designed to seamlessly integrate with ERP (Enterprise Resource Planning), WMS (Warehouse Management System), and OMS (Order Management System) systems, distinguishing us from competitors. Additionally, our solutions offer the latest in AI and IoT technology without the need for costly upgrades or replacements. This approach preserves existing investments while minimizing costs and operational disruptions, making Nacre System a cost-effective choice for leveraging cutting-edge technologies.

</p>
</div>


 
<div className='footer-div'>
  <Footer/>
</div>
    </>
  );
}

export default Navbars;