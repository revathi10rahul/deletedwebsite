import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nswhite from "../../../Assets/nswhite.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // Example icon
import iotbanner from '../../../Assets/iotbanner.jpg'
import "./iotintegration.css";
import Footer from '../../Footer'
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
        <h1 className="about-heading mt-3">IOT INTEGRATION</h1>
        

        <svg viewBox="0 0 1440 319" className="svg-curve">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* -------------------------------------------------------- */}

      <div style={{ height: "90vh" }}>
        <h1 className="heading-iotintegration ">IOT INTEGRATIONS</h1>
        <div classname="content-iotintegration">
          <div className="first-content-iotintegration">
            <img src={iotbanner} alt="" style={{borderRadius:"20px"}}/>
          </div>
          <div className="second-content-iotintegration">
            <p>In today's digital era, the Internet of Things (IoT) is revolutionizing the way warehouses operate, bringing increased automation, efficiency, and connectivity. By integrating IoT technologies into your WMS, you can unlock a wide range of benefits and transform your warehouse operations.</p>
            <p>
In PURVEY WMS, IoT integration allows you to track and monitor assets, inventory, and equipment in real-time. By deploying sensors, RFID tags, or smart devices, you can capture data on the location, condition, and movement of items throughout your warehouse. Real-time visibility enables accurate tracking, improves inventory accuracy, and enhances overall operational efficiency.
IoT integration enables you to optimize resource utilization within your warehouse. By collecting data on equipment usage, energy consumption, and worker productivity, you can identify inefficiencies and make data-driven decisions to improve resource allocation. This leads to reduced costs, increased productivity, and better utilization of warehouse resources.</p>
<p>IoT integration revolutionizes inventory management by providing real-time insights into stock levels, expiry dates, and shelf life. Sensors can monitor temperature and humidity conditions, ensuring optimal storage conditions for perishable or sensitive items. This minimizes wastage, reduces stockouts, and improves overall inventory control.
IoT integration facilitates faster and more accurate order fulfilment processes. By leveraging IoT technologies such as wearable devices, warehouse workers can receive real-time instructions, reducing errors and improving picking accuracy. This results in faster order processing, improved customer satisfaction, and increased operational efficiency. Embrace IoT integration to gain a competitive edge, streamline your operations, and deliver superior customer experiences.</p>

          </div>
        </div>
    
      </div>
      <div className="discover-iotgeneration">
          <p className="discover-content-iotgeneration">Discover how our WMS Software & Fulfillment Automation add value to your business </p>
          <button className="button-iotintegration">Learn More</button>
        </div>
        <Footer/>
    </>
  );
}

export default Navbars;
