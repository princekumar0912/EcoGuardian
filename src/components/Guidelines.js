
import React from 'react'

function Guidelines() {
  return (
    <div>
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Guidelines implementation{" "}
                  <strong>must for proper management of medical waste</strong>
                </h3>
                <p>
                  A hospital is the last resort of hope for sick people who expect to
                  get better and heal. However, shortcoming on the part of the
                  hospital staff and management could instead have an adverse effect
                  on public health. According to the annual health report published by
                  the Department of Health Services in 2000/2001, there are 74
                  hospitals, 172 Primary Health Care Units, 710 Health Posts and 3132
                  Sub-health Post run by the government across Nepal. The number of
                  healthcare institutions has certainly surged in the recent years.
                  All healthcare facilities are required to follow the ‘National
                  Health Care Waste Management Guidelines’ prepared by the National
                  Health Research Council (NHRC).
                </p>
              </div>
              <div className="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span>01</span>
                      “Wastes from health care institutions can be categorized as
                      infectious or noninfectious."{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-1"
                      className="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Infectious wastes include human, animal, or biological wastes
                        and any items that may be contaminated with pathogens.
                        Noninfectious wastes include toxic chemicals, cytotoxic drugs,
                        and radioactive, flammable, and explosive wastes, reads the
                        guideline.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      className="collapsed"
                    >
                      <span>02</span>
                      Implementation problem{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-2"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        However, not all hospitals are following the guidelines mainly
                        because of the lack of budget, lack of orientation regarding
                        medical waste management to waste handlers, and flimsy
                        monitoring from the government. Segregation of medical waste
                        is a vital part of hospital waste management. Poor management
                        of hospital waste poses risk not only to its handlers during
                        its treatment and disposal but also to the environment if not
                        disposed in a proper manner. Haphazard management of hospital
                        waste also gives black marketers an opportunity to collect the
                        disposed medical equipment and resell them.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      className="collapsed"
                    >
                      <span>03</span> Dr Kedar Century, Executive Director at Bir
                      Hospital said, <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-3"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        “We used to have an ideal waste management system to sterilize
                        and dispose hospital waste before the 2015 earthquake. But the
                        earthquake damaged the building where we had installed the
                        autoclave device and now we don’t have any space. The new
                        building is currently being used to accommodate admitted
                        patients.” Dr Century added that lack of space has barred the
                        hospital from following NHRC’s National Health Care Waste
                        Management Guidelines and they are relying on traditional
                        means of sterilization for the time being. Management of
                        medical waste at private hospitals is poorer as compared to
                        government run hospitals for want of regular monitoring from
                        authorities concerned. A report published by the Ministry of
                        Health and Population shows that private hospitals continue to
                        burn, bury and dispose hazardous immunization waste mixing it
                        up with the municipal waste.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img-whyus"
              style={{ backgroundImage: 'url("assets/img/Medical-Waste.jpg")' }}
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guidelines


