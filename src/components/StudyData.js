import React from 'react'

function StudyData() {
  return (
    <div>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">

          <div className="row">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
              <img src="assets/img/recycling5.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h3>Composition and Percentage of Waste Generation</h3>
              <p className="fst-italic">
                Management of Municipal Solid Wastes: A Case Study in Limpopo Province, South Africa
              </p>

              <div className="skills-content">

                <div className="progress">
                  <span className="skill">Plastics <i className="val">35%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '35%' }}
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Paper and Glass <i className="val">25%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Food Waste <i className="val">25%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Garden Waste <i className="val">15%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '15%' }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}



export default StudyData
