import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nswhite from "../Assets/nswhite.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./ordermanagement.css";

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
navigate('/warehousemanagementsystem')
}
const handleInbountreceipt=()=>{
navigate('/inboundreceipt')
}
const handleCrossdocking=()=>{
navigate('/crossdocking')
}
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
          <div className="d-flex" style={{ height: "calc(100vh - 120px)" }}>
            <div
              style={{
                flex: 1,
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={aporasec3}
                alt="work"
                style={{
                  width: "100%",
                  height: "70vh",
                  maxHeight: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "66px",
              }}
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
          <h1 >FEATURES</h1>

          <div style={{ display: "flex" }} className="mt-5">
          <Card className="animated-border" style={{ width: "30%", marginLeft: "70px", height: "auto" }}>
  <Card.Body>
    <Card.Title style={{ color: "#C33764" }}>
      <b>Mobile Order Management</b>
    </Card.Title>
    <Card.Text style={{ fontSize: "20px", textAlign: "justify" }}>
      Purvey OMS enables your field representatives to manage orders on the go. With our intuitive mobile app, your team can create, track, and update orders directly from their smartphones or tablets. Say goodbye to paper-based processes and embrace digital order management for enhanced speed and accuracy.
    </Card.Text>
  </Card.Body>
</Card>
            <Card style={{ width: "30%", marginLeft: "20px",height:"auto" }}>
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b>Inventory Management</b> 
                </Card.Title>
                <Card.Text style={{ fontSize: "20px",textAlign:"justify" }}>
                  Keep track of your inventory in real-time, even when it's in
                  the hands of your field team. Purvey OMS provides visibility
                  into available stock levels, allowing your representatives to
                  check inventory, place orders, and manage stock allocations on
                  the spot. Eliminate the risk of stockouts and ensure accurate
                  inventory management across the entire supply chain.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "30%", marginLeft: "20px",height:"auto" }}>
              <Card.Body>
                <Card.Title >
                 <b style={{ color: "#C33764" }}> Real Time Order Tracking</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "20px",textAlign:"justify" }}>
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

          <div style={{ display: "flex" }} className="mt-3">
            <Card style={{ width: "30%", marginLeft: "70px",height:"auto" }}>
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b> Digital Documentation</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "20px" ,textAlign:"justify"}}>
                  Simplify paperwork and documentation processes with Purvey
                  OMS's digital capabilities. Your field representatives can
                  capture electronic signatures, take photos, and attach
                  documents directly within the app. This ensures accurate and
                  organized record-keeping, reducing administrative errors and
                  saving valuable time.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "30%", marginLeft: "20px",height:"auto" }}>
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                 <b> Integration Capabilities</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "20px",textAlign:"justify" }}>
                  Purvey OMS seamlessly integrates with your existing systems,
                  such as CRM and ERP, for smooth data synchronization. This
                  integration eliminates manual data entry and ensures
                  consistency across platforms. Gain a holistic view of your
                  operations by connecting all relevant systems and improving
                  collaboration between field teams and back-office functions.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "30%", marginLeft: "20px",height:"auto" }}>
              <Card.Body>
                <Card.Title style={{ color: "#C33764" }}>
                  <b>Scalability and Flexibility</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "20px",textAlign:"justify"}}>
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
        <Footer/>
      </div>

   
    </>
  );
}

export default Ordermanagement;
