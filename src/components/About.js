import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                The ‘EcoGuardian’ is a web application aimed to provide a
                digital way of complaining the concerns of general citizens to their
                relative municipalities.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Complaining about waste or
                  garbage problems near their locality.{" "}
                </li>
                <li>
                  <i className="ri-check-double-line" /> See thier complain Report and
                  check if the work is done! or not.{" "}
                </li>
                <li>
                  <i className="ri-check-double-line" /> people can take different
                  ideas regarding recycling of waste through this website.{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Complaining about the waste problem encountered everyday to
                municipality is hefty process and waste management aims to make this
                process easier. With a simple handheld device with access to internet,
                user can use this platform complain their concerns to municipality .
                The automated system will redirect the complains .The municipality
                admins at the receiving side can acknowledge the reports which lets
                the users whether their complain is adddressed or not.
              </p>
              <a href="/" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
