import React from 'react';
import { Row, Col } from 'react-bootstrap';
import work from '../Assets/work.jpg';
import './oncloud.css';
function Oncloud() {
  return (
    <div>
      <Row className="text-center">
        <Col >
          <h1 style={{ padding: '0px', background: '#e1e1e1',width:"1230px" }} className='ms-5'>Heading</h1>
        </Col>
      </Row>
     
  
<div class="half-half-image-text">
<div class="container">
  <div >

  </div>
  <div >
    <div >
      <div class="content">
        <p> The "On Cloud" is a cutting-edge technology that revolutionizes the way businesses operate in the digital age. Built on the foundation of cloud computing, our innovative solutions offer a multitude of key value propositions, empowering organizations to thrive in today's competitive landscape. Our "On Cloud" eliminates the burden of complex and costly on-premises software installations. With no need for extensive hardware investments or intricate infrastructure setups, businesses can easily access the software and experience the flexibility and convenience of cloud-based technology. This not only saves valuable resources but also enables seamless scalability, allowing businesses to grow and adapt without the constraints of physical limitations.

"On Cloud" is its inherent scalability and agility. As businesses evolve, so do their needs. The solution seamlessly accommodates changing requirements, enabling organizations to effortlessly scale up or down as demand fluctuates. This flexibility is especially vital for mid-size distribution centers, warehouses, and fulfillment centers, as it empowers them to handle seasonal peaks and effectively respond to market shifts, ensuring optimal operational efficiency and customer satisfaction.

With robust security measures and reliable data backups, "On Cloud" prioritizes data protection and business continuity. The remarkable capability of "On Cloud" lies in its seamless integration with devices and existing legacy software systems, ensuring effortless connectivity and interoperability.

Embrace the future of business operations with "On Cloud" - a revolutionary platform that offers Purvey, a Warehouse Management System (WMS), and APORA, a Multi-channel fulfillment automation solution. These scalable, cost-effective, secure, and convenient solutions are delivered through Software as a Service (SaaS).</p>
        
      </div>
    </div>
    <div className="col-12 col-lg-6">
  <div className="img" >
<img src={work} alt="" />
  </div>
</div>

  </div>
</div>
  </div>
    
    </div>
  );
}

export default Oncloud;