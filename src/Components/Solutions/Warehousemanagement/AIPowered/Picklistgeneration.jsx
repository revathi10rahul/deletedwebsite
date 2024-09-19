import React from 'react'
import './picklistgeneration.css'
import Navbar from '../../../../Navbar/Navbar'
import picker from '../../../../Assets/picker.jpg'
import { useState } from 'react'
import star from '../../../../Assets/star.png'
import Footer from '../../../Footer';
function Picklistgeneration() {



  


const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

const faqData = [
  {
    question: "Enhanced Efficiency",
    answer: `AI-powered picklist generation automates the process of creating optimized picklists. By analysing order data, inventory levels, and other relevant factors, the system intelligently generates multiple orders synchronised picklists. This automation eliminates the time-consuming task of manually sorting through orders and increases the efficiency of order fulfilment.`,
  },
  {
    question: "Optimal Resource Utilization",
    answer: `Efficient resource allocation is crucial for streamlining order fulfilment. AI-powered picklist generation takes into account factors such as warehouse layout and staff availability to optimize the allocation of resources.`,
  },
  {
    question: "Improved Accuracy",
    answer: `Human errors in generating picklists can lead to mispicks, delays, and customer dissatisfaction. AI-powered picklist generation minimizes the risk of errors by using advanced algorithms to analyse order details and guide pick process with Barcode/ QR code/ RFID systems to ensure order accuracy and customer satisfaction.`,
  },
 
  
];


  return (
    <div>
      <Navbar/>
      {/* -------------------------------- */}
      <div className="hero-section-picklistgeneration mt-4">
        <h1 className="about-heading-picklistgeneration mt-3">Pick List Generation</h1>
        

        <svg viewBox="0 0 1440 319" className="svg-curve-picklistgeneration">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* ------------------------------ */}
      <div style={{height:"100vh"}}>
        <div className='maindiv-picklistgeneration'>
          <div className='firstdiv-picklistgeneration'>
           <img src={picker} alt="" />
          </div>
          <div className='seconddiv-picklistgeneration'>
            <h1>PICK LIST GENERATION</h1>
            <p>With Order fulfilment, businesses face the challenge of optimizing their operations to meet customer demands efficiently and accurately. Manual processes for generating picklists can be time-consuming and prone to errors. With the advent of our AI-powered picklist generation, organizations can revolutionize their order fulfilment processes.
            Our AI powered picklist generation uses artificial intelligence to analyse a variety of data points, such as product location, inventory levels, and order priority. This data is then used to generate a picklist that is optimized for efficiency and accuracy.</p>
          </div>
        </div>
      </div>

      {/* -------------------------------- */}
     
<div style={{height:"100vh"}}>
<h1>Features</h1>

      <div className='features-main-div'>
        <div className='first-features-div'>
          <h1>Accuracy and Efficiency</h1>
          <p>AI-powered picklist generation is a game-changer for organizations aiming to enhance efficiency and accuracy in order fulfilment. By leveraging the power of artificial intelligence, businesses can automate the process of generating optimized picklists, leading to improved resource utilization and higher order accuracy. With intelligent order analysis, warehouse layout optimization, and real-time inventory integration, organizations can streamline their order fulfilment processes. </p>
        </div>
        <div className='second-features-div'>
          <h1>Intelligent Order Analysis</h1>
          <p>The AI-powered picklist generation system analyses order data, including order details, priority, and delivery deadlines. It uses machine learning algorithms to understand order patterns, identify common item combinations, and optimize the sequencing of picks. This analysis ensures that picklists are generated with the utmost efficiency and accuracy.</p>
        </div>
        <div className='third-features-div'>
          <h1>Accuracy and Efficiency</h1>
          <p>AI-powered picklist generation is a game-changer for organizations aiming to enhance efficiency and accuracy in order fulfilment. By leveraging the power of artificial intelligence, businesses can automate the process of generating optimized picklists, leading to improved resource utilization and higher order accuracy. With intelligent order analysis, warehouse layout optimization, and real-time inventory integration, organizations can streamline their order fulfilment processes. </p>
        </div>
        <div className='fourth-features-div'>
          <h1>Intelligent Order Analysis</h1>
          <p>The AI-powered picklist generation system analyses order data, including order details, priority, and delivery deadlines. It uses machine learning algorithms to understand order patterns, identify common item combinations, and optimize the sequencing of picks. This analysis ensures that picklists are generated with the utmost efficiency and accuracy.</p>
        </div>
        
      </div>
      
      </div>


{/* ------------------------------------------------------------------------------ */}
<div style={{ height: "50vh" }}>
      <h1 style={{ color: "#C33764" }} className="valuedelivered-picklist">Value Delivered</h1>

       <div style={{textAlign:"center"}}>
       <div className="faq_main_container">

{faqData.map((faq, index) => (
  <div className="faq_container" key={index}>
    <div
      className={`faq_question ${
        activeIndex === index ? "active" : ""
      }`}
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
      <div className="answer-picklist">
        <p >{faq.answer}</p>
      </div>
    </div>
  </div>
))}
</div>

       </div>

      </div>
     <Footer/>
</div>
   

  )
}

export default Picklistgeneration