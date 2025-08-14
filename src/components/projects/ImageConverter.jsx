import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
const BASE_URL = import.meta.env.BASE_URL;
// import { CgScreen } from "react-icons/cg";

const ImageConverter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={`${BASE_URL}images/image_converter/image_converter.png`}
        alt="dashboard"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Image Converter</h6>
          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/image-converter-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ms-4 github-icon" size={39} />
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
                <h3>Image Converter</h3>
                <h5>Objective:</h5>
                <p>
                  A web application that allows users to upload images and
                  convert them into different formats (JPEG, PNG, WebP). It
                  supports resizing, grayscale conversion, and quality
                  adjustment to optimize images.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    Upload images and convert to multiple formats (JPEG, PNG,
                    WebP)
                  </li>
                  <li>Resize images with custom width and height</li>
                  <li>Convert images to grayscale</li>
                  <li>Adjust image quality for compression</li>
                  <li>
                    Download single images or batch download as a ZIP archive
                  </li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>FastAPI (Python)</li>
                  <li>React with Vite, Tailwind CSS</li>
                  <li>Docker & Docker Compose</li>
                  <li>Git/GitHub</li>
                </ul>
                <h5>App Interface</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/image_converter/interface.png`}
                    alt="app_interface"
                  />
                </div>
                <h5>Image Upload</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/image_converter/upload.png`}
                    alt="upload_section"
                  />
                </div>
                <h5>Form for Conversion Options</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/image_converter/form.png`}
                    alt="conversion_form"
                  />
                </div>
                <h5>Conversion Result Display</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/image_converter/convert.png`}
                    alt="conversion_result"
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

export default ImageConverter;
