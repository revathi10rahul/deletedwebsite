import React from 'react'

import './homepage2.css'



import APORA from '../Assets/APORA-banner.png'
import papar from '../Assets/papar.jpg'
import nswhite from '../Assets/nswhite.png'

// import Home from './Home'
import { useState,useEffect } from 'react'
import work4 from '../Assets/work4.jpg'
import work from '../Assets/work.jpg'


const contentData = [
  {
    title: 'PURVEY',
    subtitle: 'WMS',
    description: `
      Ensure 100% Traceability of Goods
      Empower Your Business with Real-Time Inventory Insights
      Streamline Inventory, Slash Operational Costs
      ON CLOUD
      Embrace elastic scalability without capital spend
      Save up to 50% on IT costs.
    `,
    image1: APORA,
    image2: papar
  },
  {
    title: 'ON',
    subtitle: 'CLOUD',
    description: `
   
    Ensure 100% Traceability of Goods
      Empower Your Business with Real-Time Inventory Insights
      Streamline Inventory, Slash Operational Costs
      ON CLOUD
      Embrace elastic scalability without capital spend
      Save up to 50% on IT costs.
    `,
    image1:work4,
    image2: papar
  },
  {
    title: 'APORA',
    subtitle: 'AI Powered Fulfillment Automation',
    
    description: `
    
   
    Ensure 100% Traceability of Goods
      Empower Your Business with Real-Time Inventory Insights
      Streamline Inventory, Slash Operational Costs
      ON CLOUD
      Embrace elastic scalability without capital spend
      Save up to 50% on IT costs.
    `,
    image1:work,
    image2: papar
  } 
  // Add more contentData objects as needed
];  
function Homepage2() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000); // Change the interval duration as needed (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, []);
    
  return (
    <>
    <div>
       
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a  class="logo d-flex align-items-center">
       
 <img src={nswhite} alt="" />
        {/* <h1 class="sitename">Nacre System</h1> */}
      </a>

      <nav id="navmenu" class="navmenu" >
        <ul>
          <li><a  class="active">Home</a></li>
          <li><a >About</a></li>
          <li><a >Services</a></li>
          <li><a >Portfolio</a></li>
          <li><a >Team</a></li>
          <li><a >Blog</a></li>
          <li class="dropdown"><a ><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a >Dropdown 1</a></li>
              <li class="dropdown"><a ><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a >Deep Dropdown 1</a></li>
                  <li><a >Deep Dropdown 2</a></li>
                  <li><a >Deep Dropdown 3</a></li>
                  <li><a >Deep Dropdown 4</a></li>
                  <li><a >Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a >Dropdown 2</a></li>
              <li><a >Dropdown 3</a></li>
              <li><a >Dropdown 4</a></li>
            </ul>
          </li>
          <li><a >Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <main class="main">


  <section id="hero" class="hero section dark-background">



 <div id="hero-carousel" class="carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

   <div class="container position-relative">

     <div class="carousel-item active" >
       <div class="carousel-container" >
       <h2 className="purveyimg animate-from-bottom mt-5">{contentData[currentIndex].title}</h2>
              <h2 className="wmsimg animate-from-bottom mt-2">{contentData[currentIndex].subtitle}</h2>
              <h6 className="content animate-from-bottom mt-5">
                {contentData[currentIndex].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h6>
       </div>
     </div>

    

   </div>

 </div>

</section>

  

    



  </main>


    </div>
 
    </>
  )
}

export default Homepage2