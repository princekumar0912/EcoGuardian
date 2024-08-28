import React from 'react'

function HeroSection() {
  return (

    <>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>Your Voice, Our Action-Together for a Greener Future </h1>
              <h2>Empowering Communities for a Greener Tomorrow</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href=" " className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://youtu.be/mQ93IcGCag4"
                  className="glightbox btn-watch-video"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img
                src="https://images.pexels.com/photos/8395838/pexels-photo-8395838.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Cliens Section ======= --> */}
      {
        <section id="cliens" className="cliens section-bg">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/images.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/images (1).png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/Capture.PNG"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/download (2).jfif"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/download (1).jfif"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/download (3).jfif"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      }


    </>


  )
}

export default HeroSection

