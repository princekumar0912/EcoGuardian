import React from 'react'

function Footer() {
  return (
    <><footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <img
                  src="public\assets\img\logoresize.png"
                  style={{ width: 80, height: 60 }}
                />
              </h3>
              <p>
                Moti Nagar <br />
                New Delhi, Delhi
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 7657922535
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@bheemdattamun.gov.np bmuncipality@gmail.com">
                  info@bheemdattamun.gov.np bmuncipality@gmail.com
                  <br />
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#faq">FAQ</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Waste Pick up </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">E- managementwaste</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Garbage Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Awareness program</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Complain Hnadling </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Follow us in our social media to stay updated about community waste
                management.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>SWMS</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="">Prayagpal </a>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
