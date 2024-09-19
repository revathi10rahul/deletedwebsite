import React from 'react'
import Navbars from '../../../../Navbar/Navbar'
import { useState,useRef,useEffect } from 'react';
import pack_optimization from '../../../../Assets/work3.jpg'
import './packageandshipping.css'
function Packageandshipping() {
    
  return (
    <div>
        <Navbars/>
      {/* -------------------------------------- */}

	  <div className="hero-section-picklistgeneration mt-4">
        <h1 className="about-heading-picklistgeneration mt-3">Package and shipping</h1>
        

        <svg viewBox="0 0 1440 319" className="svg-curve-picklistgeneration">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

{/* ------------------------------------------------------------------------------------------------- */}
<div style={{height:"100vh"}}>
	<h1>Features</h1>

	<section class="pb-5 pt-5" id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Our Services</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting. </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item active">
                        <div class="icon">
                            <i class="far fa-check-square"></i>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                            <i class="fas fa-chart-bar"></i>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="https://bit.ly/2LHKl61" class="services-small-item">
                        <div class="icon">
                            <i class="fa fa-shopping-cart"></i>
                        </div>
                        <h5 class="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div class="button">
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </a>
                    <div class="item-bg"></div>
                </div>
            </div>
        </div>
    </section>
</div>


{/* ------------------------------------------------------------- */}
    </div>
  )
}

export default Packageandshipping