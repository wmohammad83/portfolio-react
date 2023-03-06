import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <div className="container" style={{ height: "70vh" }}>
        <h1 className="mt-4">Contact</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-4">
            <h4>Want to get into contact?</h4>
            <p>
              Please see my details below or you can fill out the form on the
              right.
            </p>
            <i class="fa-regular fa-envelope"></i>{" "}
            <Link to="mailto:wmohammad83@icloud.com">wmohammad@icloud.com</Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
