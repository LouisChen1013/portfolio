import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Project5 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={process.env.PUBLIC_URL + "/images/ecommerce/ecom_main.png"}
        alt="dashboard"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Demoshop eCommerce</h6>

          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/eCommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ml-4 github-icon" size={39} />
          </a>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          animation={false}
          className="my-modal"
        >
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body className="px-0 py-0">
            <section className="s3">
              <div className="nav-wrapper">
                <div className="dots-wrapper">
                  <div
                    id="dot-1"
                    className="browser-dot modal-dot"
                    onClick={handleClose}
                  ></div>
                  <div id="dot-2" className="browser-dot"></div>
                  <div id="dot-3" className="browser-dot"></div>
                </div>
              </div>

              <div className="main-context">
                <h3>Demoshop eCommerce</h3>
                <h5>Objective:</h5>
                <p>
                  Demoshop is an eCommerce web application built with React on
                  the frontend and Django for the backend. It provides a simple
                  and easy-to-use interface for users to enjoy shopping online.
                  It purposely does not include every conceivable feature of an
                  e-commerce website; instead, Demoshop aims to provide core
                  features that most e-commerce websites have. The website is
                  hosted on Heroku and has AWS RDS&S3 to hold the
                  database/files.
                </p>
                <h5>Key Features: </h5>
                <ul>
                  <li>Full-featured shopping cart</li>
                  <li>User registration & login portals</li>
                  <li>Product reviews & ratings</li>
                  <li>Top trending products with carousel</li>
                  <li>Product search & pagination functionalities</li>
                  <li>User profile with orders</li>
                  <li>
                    Admin product & user management (create, edit, delete)
                  </li>
                  <li>Mark orders as delivered option</li>
                  <li>Checkout process (shipping, payment, place order)</li>
                  <li>PayPal / credit card integration</li>
                </ul>
                <h5>Technologies: </h5>
                <ul>
                  <li>React</li>
                  <li>Django</li>
                  <li>Heroku</li>
                  <li>Sqlite</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                  <li>Git/Github</li>
                </ul>
                <a
                  href="https://demoshop-c.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <br />
                <i>
                  <b>
                    Note: Please create paypal sandbox if you want to test the
                    payment process
                  </b>
                </i>
                <h5>UML</h5>
                <div className="img-container">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ecommerce/uml.png"}
                    alt="uml"
                  />
                </div>
                <h5>Home page & Product search functionality</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/ecommerce/ecom_main.png"
                    }
                    alt="home_page"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_search.png"
                    }
                    alt="search"
                  />
                </div>
                <h5>Sign Up & Sign In Screen</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_sign_up.png"
                    }
                    alt="sign_up"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_sign_in.png"
                    }
                    alt="sign_in"
                  />
                </div>
                <h5>Product page & reviews & ratings</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_product.png"
                    }
                    alt="product"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_review.png"
                    }
                    alt="review"
                  />
                </div>
                <h5>Checkout Process</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_shopping_cart.png"
                    }
                    alt="shopping_cart"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_shipping.png"
                    }
                    alt="shipping"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_payment.png"
                    }
                    alt="payment"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_place_order.png"
                    }
                    alt="place_order"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_paypal.png"
                    }
                    alt="paypal"
                  />
                </div>
                <h5>User profile with orders</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_profile.png"
                    }
                    alt="profile"
                  />
                </div>
                <h5>Mark orders as delivered option</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_mark_deliver.png"
                    }
                    alt="mark_deliver_complete"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_mark_deliver_complete.png"
                    }
                    alt="mark_deliver_complete"
                  />
                </div>
                <h5>Admin product & User management I</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_products.png"
                    }
                    alt="products"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_users.png"
                    }
                    alt="users"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_orders.png"
                    }
                    alt="orders"
                  />
                </div>
                <h5>Admin product & User management II</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_edit_product.png"
                    }
                    alt="edit_products"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ecommerce/ecom_edit_user.png"
                    }
                    alt="edit_users"
                  />
                </div>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-color" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Project5;
