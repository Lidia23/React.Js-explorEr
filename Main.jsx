import './Main.css';
import Form from 'react-bootstrap/Form';
import Menu from './Menu.js';
import Footer from './Footer.js';
import { Link, useNavigate } from "react-router-dom";
import Program_List from './Program-List.js';
import video from './video.png';
import registration from './registration.svg';
import consult from './consultant.png';
import studentssitting from './studentssitting.jpg';
import laptop from './laptop-solid.svg';

function Main() {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  //     let navigate = useNavigate(); 
  //     const routeChange = () =>{ 
  //     let path = "/Program_List"; 
  //     navigate(path);
  //   }
  const handleClick = () => {
    window.open("/Program_List.js");
  }

  return (
    <div className='main'>
      <Menu />
      <section>
        <div class="container-fluid row sloganHolder">

          <div class="slogan col-lg-8">
            <h2>
              Explore, Learn, Grow.
            </h2>
            <span>
              Broad your horizons, enhance your personal growth
            </span>
            <Link to="/contact">
              <button href="contact">Contact Us</button>
            </Link>
          </div>
          <div class="col-lg-4 sloganImgHolder">
            <img src={registration} alt="" />
          </div>

        </div>

        <div class="container-fluid">
          <div class="row cardHolder">
            <div class="card col-md-3">
              <div class="holderDiv">
                <div>
                  <span><img src={laptop} width="40" alt="laptop_icon" /></span>
                </div>
                <div class="cardText">
                  What we offer. Some sample really inspiring sample like text with big words for our product
                  that shows how much better we are than other groups or smth idk.
                </div>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="holderDiv">
                <div>
                  <span><img src={laptop} width="40" alt="laptop_icon" /></span>
                </div>
                <div class="cardText">
                  What we offer. Some sample really inspiring sample like text with big words for our product
                  that shows how much better we are than other groups or smth idk.
                </div>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="holderDiv">
                <div>
                  <span><img src={laptop} width="40" alt="laptop_icon" /></span>
                </div>
                <div class="cardText">
                  What we offer. Some sample really inspiring sample like text with big words for our product
                  that shows how much better we are than other groups or smth idk.
                </div>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="holderDiv">
                <div>
                  <span><img src={laptop} width="40" alt="laptop_icon" /></span>
                </div>
                <div class="cardText">
                  What we offer. Some sample really inspiring sample like text with big words for our product
                  that shows how much better we are than other groups or smth idk.
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="exchangeShowcase">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={video} width="584" alt="/" />
            </div>

            <div class="col-md-6">
              <h2>Why Exchanging Programs?</h2>
              <div>Exchanging programs can be a useful way for individuals to access new software, collaborate with others, learn new programming techniques, and build connections within the programming community.</div>
              <div>Here are a few reasons why people might exchange programs:</div>

              <div class="row">
                <div class="col-md-6">1.Access to new software</div>
                <div class="col-md-6">3.Learning opportunities</div>
                <div class="col-md-6">2.Collaboration</div>
                <div class="col-md-6">4.Community building</div>
              </div>
            </div>
          </div>

          <div class="row exhGeneralInfo">
            <div class="col-md-3 text-general">
              <h3 class="number" data-number="18">18</h3>
              <div>Universities</div>
            </div>
            <div class="col-md-3 text-general">
              <h3 class="number" data-number="50">50</h3>
              <div>Programs</div>
            </div>
            <div class="col-md-3 text-general">
              <h3 class="number" data-number="20">20</h3>
              <div>Places</div>
            </div>
            <div class="col-md-3 text-general">
              <h3 class="number" data-number="130">130</h3>
              <div>Students</div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div class="container-fluid">
          <div class="courseHeader">
            <h2>Exchange Programs</h2>
            <h3>Broad your horizons, enhance your personal
              growth</h3>
          </div>

          <div class="row courseHolder">
            <div class="col-md-3">
              <img src="../images/computer.svg" alt="" />
              <div class="courseData">
                <span><i class="fa-solid fa-person"></i> Mr khan</span>
                <span><i class="fa-solid fa-chair"></i> 10 seats</span>
                <span><i class="fa-regular fa-calendar"></i> 1 semester</span>
              </div>
              <div> Exchange Program in Computer Science</div>
              <div>Write here some info abou the study program. After apply now all the info would be displayed in ather page</div>
              <button class="applyBtn">Apply now</button>
            </div>
            <div class="col-md-3">
              <img src="../images/computer.svg" alt="" />
              <div class="courseData">
                <span><i class="fa-solid fa-person"></i> Mr khan</span>
                <span><i class="fa-solid fa-chair"></i> 10 seats</span>
                <span><i class="fa-regular fa-calendar"></i> 1 semester</span>
              </div>
              <div> Exchange Program in Computer Science</div>
              <div>Write here some info abou the study program. After apply now all the info would be displayed in ather page</div>
              <button class="applyBtn">Apply now</button>
            </div>
            <div class="col-md-3">
              <img src="../images/computer.svg" alt="" />
              <div class="courseData">
                <span><i class="fa-solid fa-person"></i> Mr khan</span>
                <span><i class="fa-solid fa-chair"></i> 10 seats</span>
                <span><i class="fa-regular fa-calendar"></i> 1 semester</span>
              </div>
              <div> Exchange Program in Computer Science</div>
              <div>Write here some info abou the study program. After apply now all the info would be displayed in ather page</div>
              <button class="applyBtn">Apply now</button>
            </div>
          </div>
        </div>
      </section>
      <section class="consultation">
        <div class="container">
          <div class="row formHolder">
            <div class="col-md-6">
              <div>
                <h2>Request A Consultation</h2>
                <p>Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.</p>
              </div>

              <form action="#" class="appointment-form ftco-animate fadeInUp ftco-animated">
                <div class="row rowConsult">
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <input type="text" class="customFormControl" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <input type="text" class="customFormControl" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <div class="form-field">
                        <div class="select-wrap">
                          <div class="icon">
                            <span class="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" class="customFormControl">
                            <option value="">Select Your Course</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <input type="text" class="customFormControl" placeholder="Phone" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <textarea name="" id="" cols="30" rows="1" class="customFormControl" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group formGroupMargin">
                      <input class="btn request" type="submit" value="Request A Consultant" />
                    </div>
                  </div>
                </div>
              </form>

            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid">
          <div class="row blogHolder">

            <div class="col-md-3 m-1">

              <div class="img-container">
                <img src={studentssitting} alt="Students sitting together" />
                <div class="text-overlay">
                  <span>26</span>
                  <span>June</span>
                  <span>2019</span>
                </div>
              </div>

              <div class="blogText">
                <h1>Header</h1>
                <span>There is some placeholder text about out blog bla bla bla press the read more button to go to the specific blog page</span>
              </div>
              <div><a href="blog.html">
                <button class="blog-button">Go to Blog</button>
              </a></div>
            </div>

            <div class="col-md-3 m-1">

              <div class="img-container">
                <img src={studentssitting} alt="Students sitting together" />
                <div class="text-overlay">
                  <span>26</span>
                  <span>June</span>
                  <span>2019</span>
                </div>
              </div>

              <div class="blogText">
                <h1>Header</h1>
                <span>There is some placeholder text about out blog bla bla bla press the read more button to go to the specific blog page</span>
              </div>
              <div><a href="blog.html">
                <button class="blog-button">Go to Blog</button>
              </a></div>
            </div>

            <div class="col-md-3 m-1">

              <div class="img-container">
                <img src={studentssitting} alt="Students sitting together" />
                <div class="text-overlay">
                  <span>26</span>
                  <span>June</span>
                  <span>2019</span>
                </div>
              </div>

              <div class="blogText">
                <h1>Header</h1>
                <span>There is some placeholder text about out blog bla bla bla press the read more button to go to the specific blog page</span>
              </div>
              <div><a href="blog">
                <button class="blog-button">Go to Blog</button>
              </a></div>
            </div>


          </div>


        </div>


      </section>
      <Footer />
    </div>
  );
}

export default Main;