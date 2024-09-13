import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import papar from '../Assets/papar.jpg'
import nswhite from '../Assets/nswhite.png'
import work from '../Assets/work.jpg'
function Home() {



  return (
    <div>

<header id="header" className="header bg-dark d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
       
       {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Nacre System</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <main className="main">

   
    <section id="hero" className="hero section dark-background">

   {/* <img src={work} alt="" data-aos="fade-in"> */}

   <div id="hero-carousel" className="carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

<div className="container position-relative">




  <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>

  <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>

 
 

</div>

</div>


    </section>

   
    <section id="featured-services" className="featured-services section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item item-cyan position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item item-orange position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Eosle Commodi</h3>
              </a>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item item-teal position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Ledo Markt</h3>
              </a>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item item-red position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Asperiores Commodit</h3>
              </a>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              <a href="service-details.html" className="stretched-link"></a>
            </div>
          </div>
        </div>

      </div>

    </section>

   
    <section id="about" className="about section light-background">

      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
            {/* <img src="assets/img/about.jpg" className="img-fluid" alt=""> */}
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>

      </div>

    </section>

   
    <section id="features" className="features section">

   
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            {/* <img src="assets/img/features-1.svg" className="img-fluid" alt=""> */}
          </div>
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            {/* <img src="assets/img/features-2.svg" className="img-fluid" alt=""> */}
          </div>
          <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            {/* <img src="assets/img/features-3.svg" className="img-fluid" alt=""> */}
          </div>
          <div className="col-md-7" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
            {/* <img src="assets/img/features-4.svg" className="img-fluid" alt=""> */}
          </div>
          <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>

    </section>
  </main>

  <footer id="footer" className="footer dark-background">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="d-flex align-items-center">
            <span className="sitename">Moderna</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="social-links d-flex">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Moderna</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>        
    </div>

  </footer>
    </div>
  )
}

export default Home