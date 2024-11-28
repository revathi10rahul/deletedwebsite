import { Row,Col, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import nswhite from  '../../Assets/nswhite.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import work4 from '../../Assets/work4.jpg'
import work2 from '../../Assets/work2.webp'
import { useNavigate } from 'react-router-dom';
import work3 from '../../Assets/work3.jpg'
import { FaChevronDown } from 'react-icons/fa'; // Example icon
import './newdesigndemo.css'
import Footer from '../Footer';

function DeconsolidationCrossdocking() {
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

const handlePicksequencing=()=>{
  navigate('/picksequencing')
}
const handleWorkforcemanagement=()=>{
  navigate('/workforceoptimization')
}
const handlePackingandshipping=()=>{
  navigate('/packageandshipping')
}
const handleFulfillmentvalidation=()=>{
  navigate('/fulfillmentvalidation')
}
const handleEcommerceintegration=()=>{
  navigate('/ecommerceintegration')
}

const [activeItem, setActiveItem] = useState('Material Inward');
const [activeSubItem, setActiveSubItem] = useState('Unique Scan Code Generation');


// Default selected item
const handleClick = (item) => {
  setActiveItem(item);
  setActiveSubItem(''); // Reset the sub-item when switching main items

};
const items = [
  { title: 'Unique Scan Code Generation' },
  { title: 'Pallet, Bags, Carton Level Tracking' },
  { title: 'Purchase Order, Advanced Shipping Notice Linking' },
  { title: 'Invoice Aligned Product, Lot Trace' },
  { title: 'Electronic Record Transfer Deconsolidation And Crossdocking' },
  { title: 'Supplier Metrics Data Input For Procurement Planning' },
  { title: 'API Integrations To Purchase, Finance & ERP Applications' },
];


const getImageForSubItem = () => {
  if (activeItem === 'Deconsolidation & Crossdocking') {
    switch (activeSubItem) {
      case 'Goods Receipt Note to Package linking':
        return work4; // Path for Goods Receipt Note image
      // Add cases for other sub-items as needed
      default:
        return work3; // Default image for Deconsolidation & Crossdocking
    }
  }
  return null; // No image found
};
const handleSubItemClick = (subItem) => {
  setActiveSubItem(subItem);
};
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
                  <NavDropdown.Item onClick={handlePicksequencing}>Pick Sequencing</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleWorkforcemanagement}>Work Force Management</NavDropdown.Item>
                  <NavDropdown.Item onClick={handlePackingandshipping}>Packing And Shipping</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleFulfillmentvalidation}>Fulfillment Validation</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleEcommerceintegration}>E-Commerce Integration</NavDropdown.Item>
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
          <h3 className="about-heading2 mt-3 text-white">FOR A DECADE PLUS</h3>
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
   

<Container fluid>
<h1>PURVEY-WMS</h1>

<Row>
        <Col>
        <ul className="responsive-list">
          <li 
            onClick={() => handleClick('Material Inward')}
            className={activeItem === 'Material Inward' ? 'selected' : ''}
          >
            Material Inward
          </li>
          <li 
            onClick={() => handleClick('Deconsolidation & Crossdocking')}
            className={activeItem === 'Deconsolidation & Crossdocking' ? 'selected' : ''}
          >
            Deconsolidation & Crossdocking
          </li>
          <li 
            onClick={() => handleClick('Quality Assurance')}
            className={activeItem === 'Quality Assurance' ? 'selected' : ''}
          >
            Quality Assurance
          </li>
          <li 
            onClick={() => handleClick('Unpacking & Repacking')}
            className={activeItem === 'Unpacking & Repacking' ? 'selected' : ''}
          >
            Unpacking & Repacking
          </li>
          <li 
            onClick={() => handleClick('Put Away')}
            className={activeItem === 'Put Away' ? 'selected' : ''}
          >
            Put Away
          </li>
          <li 
            onClick={() => handleClick('Picking')}
            className={activeItem === 'Picking' ? 'selected' : ''}
          >
            Picking
          </li>
          <li 
            onClick={() => handleClick('Van Delivery & Sales')}
            className={activeItem === 'Van Delivery & Sales' ? 'selected' : ''}
          >
            Van Delivery & Sales
          </li>
        </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={1}></Col>
        <Col lg={5}>
        
        {activeItem === 'Material Inward' && (
  <ul className="block-list mt-5">
    <li
      onClick={() => handleSubItemClick('Unique Scan Code Generation')}
      style={{
        background: activeSubItem === 'Unique Scan Code Generation' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Unique Scan Code Generation
    </li>
    <li
      onClick={() => handleSubItemClick('Pallet, Bags, Carton Level Tracking')}
      style={{
        background: activeSubItem === 'Pallet, Bags, Carton Level Tracking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Pallet, Bags, Carton Level Tracking
    </li>
    <li
      onClick={() => handleSubItemClick('Purchase Order, Advanced Shipping Notice Linking')}
      style={{
        background: activeSubItem === 'Purchase Order, Advanced Shipping Notice Linking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Purchase Order, Advanced Shipping Notice Linking
    </li>
    <li
      onClick={() => handleSubItemClick('Invoice Aligned Product, Lot Trace')}
      style={{
        background: activeSubItem === 'Invoice Aligned Product, Lot Trace' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Invoice Aligned Product, Lot Trace
    </li>
    <li
      onClick={() => handleSubItemClick('Electronic Record Transfer Deconsolidation And Crossdocking')}
      style={{
        background: activeSubItem === 'Electronic Record Transfer Deconsolidation And Crossdocking' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Electronic Record Transfer Deconsolidation And Crossdocking
    </li>
    <li
      onClick={() => handleSubItemClick('Supplier Metrics Data Input For Procurement Planning')}
      style={{
        background: activeSubItem === 'Supplier Metrics Data Input For Procurement Planning' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      Supplier Metrics Data Input For Procurement Planning
    </li>
    <li
      onClick={() => handleSubItemClick('API Integrations To Purchase, Finance & ERP Applications')}
      style={{
        background: activeSubItem === 'API Integrations To Purchase, Finance & ERP Applications' ? '#e1e1e1' : 'transparent',
        cursor: 'pointer'
      }}
    >
      API Integrations To Purchase, Finance & ERP Applications
    </li>
  </ul>
)}

        {activeItem === 'Deconsolidation & Crossdocking' && (
          <DeconsolidationCrossdocking/>
        )}
        </Col>

        <Col lg={5} className='mt-3'>
          <img src={getImageForSubItem()} alt="Additional Information" />
        </Col>

        <Col lg={1}></Col>
      </Row>
</Container>

<div className='footer-div'>
  <Footer/>
</div>
    </>
  );
}

export default DeconsolidationCrossdocking;