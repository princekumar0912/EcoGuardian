import React from 'react'

function CallToAction() {
  return (
    <>
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Call To Action</h3>
              <p> Here is the phone number of municipality.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="tel:+917657922535">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction
