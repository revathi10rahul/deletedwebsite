import React from 'react'
import Navbars from '../../../../Navbar/Navbar'
import { useState } from 'react'
import './pickingsequencing.css'
import pick_sequencing from '../../../../Assets/pick_sequencing.png'
import Footer from '../../../Footer'
function Picksequencing() {
  
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
        <Navbars/>
        <div className="hero-section-picksequencing mt-4">
        <h1 className="about-heading-picksequencing mt-3">Pick Sequencing</h1>
        

        <svg viewBox="0 0 1440 319" className="svg-curve-picksequencing">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* --------------------------------------------------------- */}

      <div style={{height:"100vh"}}>
        <div className='maindiv-picksequencing'>
          <div className='firstdiv-picksequencing'>
           <img src={pick_sequencing} alt="" />
          </div>
          <div className='seconddiv-picksequencing'>
            <h1>PICK SEQUENCING</h1>
            <p>Optimizing order fulfilment processes is crucial to meet customer demands efficiently. Traditional pick routing methods often rely on manual decision-making, which can be time-consuming and prone to errors. However, with the advent of AI-powered pick routing systems integrated into Warehouse Management Systems (WMS), organizations can revolutionize their operations.
            Our AI-powered pick routing system is a game-changer for organizations seeking to optimize order fulfilment and enhance overall warehouse productivity. By harnessing the power of artificial intelligence, businesses can intelligently determine the most efficient picking routes, reduce errors and adapt to real-time changes. With enhanced efficiency, improved accuracy and real-time adaptability, organizations can streamline their warehouse operations and deliver exceptional customer experiences.</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}

     <div style={{height:"80vh"}}>
<h1 style={{padding:"30px"}}>Features</h1>
<div className='main-picksequencing'>
<div className='first-picksequencing'>
  <h1>Intelligent Route Optimization</h1>
  <p>The AI-powered pick routing system utilizes advanced algorithms to analyse order details, item locations, and warehouse layout. It derives the most efficient routes for picking based on factors such as item proximity , location sequence and order priorities. This intelligent optimization minimizes travel time and maximizes picking efficiency.</p>
</div>
<div className='second-picksequencing'>
  <h1>Real-Time Inventory Visibility</h1>
  <p>The pick sequencing system integrates with the Warehouse Management System to access real-time inventory data. It considers inventory availability, item locations, and stock levels when determining optimal picking routes. This ensures accurate and up-to-date information for efficient order fulfilment.</p>
</div>
<div className='third-picksequencing'>
  <h1>Effective Resource Utilization</h1>
  <p>The AI-powered pick sequencing system employs advanced algorithms to meticulously analyse the items across all orders scheduled for the day. Through efficient computation, it precisely determines the activity level of each picker's assigned zone based on the volume of items contained within that zone and the workload of the picker within that specific area. By taking into account these crucial factors, the system intelligently assigns picksequencings to each picker, ensuring alignment with their current zone of activity. This strategic assignment eliminates the unnecessary back and forth walking that consumes valuable time for the picker, ultimately optimizing their productivity.</p>
</div>
</div>
     </div>
{/* ---------------------------------------------------------- */}

<div style={{height:"50vh"}}>
<h1 style={{ color: "#C33764" }} className="valuedelivered-picksequencing">Value Delivered</h1>

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
<div className="answer-picksequencing">
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

export default Picksequencing