import './Footer.css';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Contact_explorEr', 'template_gu6czid', form.current, 'y6_ZFf9vPMapGvlB8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <footer>
        <div class="container footerContainer">
          <div class="row footer">
            <div class="col-md-6 col-lg-3">
              <div>
                <h2>Have a Question?</h2>
                <div>
                  <ul className='ull'>
                    <li class="list"><i class="bi bi-geo-alt-fill icon"></i><a href="https://www.google.com/maps/place/Rruga+Ismail+Qemali,+Tirana,+Albania/@41.3204978,19.813537,17z/data=!3m1!4b1!4m6!3m5!1s0x1350311c62efc20f:0x6d8a0d16ceae6db7!8m2!3d41.3204978!4d19.8161119!16s%2Fg%2F1tpmd9md" target="_blank" id="nav">
                      Tirana, Albania</a></li>
                    <li class="list"><i class="bi bi-telephone-fill icon"></i><a href="tel:+355696547888" id="nav">+355696547888</a></li>
                    <li class="list"><i class="bi bi-envelope-fill icon"></i><a href="mailto:info@explorer.com" target="_blank" id="nav">info@explorer.com</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div>
                <h2>Recent Blogs</h2>
                <div>
                  <img alt="" class="rectangle-29" src="https://static.overlay-tech.com/assets/fa171ba1-6cbf-4b4a-aca1-2e0e623773bf.png" />
                  <div class="flex-wrapper-nine">
                    <p class="recent-blog"><a id="nav" href="#">Even the all-powerful Pointing has no control about</a>
                    </p>
                    <div class="flex-wrapper-eleven">
                      <img alt="" class="icon-calendar" src="https://static.overlay-tech.com/assets/a2d87e17-af5e-4d1d-a2fb-98dd2bffd1dc.svg" />
                      <p class="dd-mm-yyyy">dd/mm/yyyy</p>
                    </div>
                    <div class="flex-wrapper-eleven">
                      <img alt="" class="icon-user" src="https://static.overlay-tech.com/assets/8db64288-383b-4835-9dcb-01662263499a.svg" />
                      <p class="name">Name</p>
                      <img alt="" class="comment" src="https://static.overlay-tech.com/assets/786e2440-c524-4417-80f8-3e2edeb425ab.svg" />
                      <p class="comments">Comments</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img alt="" class="rectangle-29" src="https://static.overlay-tech.com/assets/53a753f1-d447-41b1-a292-43f9299fabd5.png" />
                  <div class="flex-wrapper-nine">
                    <p class="recent-blog"><a id="nav" href="#">Even the all-powerful Pointing has no control about</a>

                    </p>
                    <div class="flex-wrapper-eleven">
                      <img alt="" class="icon-calendar" src="https://static.overlay-tech.com/assets/a2d87e17-af5e-4d1d-a2fb-98dd2bffd1dc.svg" />
                      <p class="dd-mm-yyyy">dd/mm/yyyy</p>
                    </div>
                    <div class="flex-wrapper-eleven">
                      <img alt="" class="icon-user" src="https://static.overlay-tech.com/assets/8db64288-383b-4835-9dcb-01662263499a.svg" />
                      <p class="name">Name</p>
                      <img alt="" class="comment" src="https://static.overlay-tech.com/assets/786e2440-c524-4417-80f8-3e2edeb425ab.svg" />
                      <p class="comments">Comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <h2 className='ull'>Links</h2>
              <ul>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="home">Home</a></li>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="about">About Us</a></li>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="universitetet">Universities</a></li>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="projectlist">Study Programs</a></li>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="blog">Blogs</a></li>
                <li><i class="bi bi-arrow-right-short"></i><a id="nav" href="contact">Contact</a></li>
              </ul>
            </div>

            <div class="col-md-6 col-lg-3">
              <div>
                <h2>Subscribe Now</h2>
                <form action="#" class="sub" ref={form} onSubmit={sendEmail}>
                  <div class="form-group">
                    <Form.Control size="lg" type="email" class="form-control" placeholder="Enter Email" name="email" />
                    <div class="d-grid">
                      <button class="btn subscribe" type="submit" value="Send">Subscribe</button>
                    </div>
                  </div>
                </form>
                <h3 className='h33'> Connect With Us</h3>
              </div>
              <div class="btn-group me-2" role="group" aria-label="First group">
                <a
                  class="btn btn-primary btn-lg btn-floating twitter btn-circle"
                  href="#!"
                  role="button"
                ><i class="bi bi-twitter"></i>
                </a>
              </div>
              <div class="btn-group me-2" role="group" aria-label="Second group">
                <a
                  class="btn btn-primary btn-lg btn-floating facebook"
                  href="#!"
                  role="button"
                ><i class="bi bi-facebook"></i>
                </a>
              </div>
              <div class="btn-group me-2" role="group" aria-label="Third group">
                <a
                  class="btn btn-primary btn-lg btn-floating instagram"
                  href="#!"
                  role="button"
                ><i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center p-4 div">
            Copyright©2023 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;