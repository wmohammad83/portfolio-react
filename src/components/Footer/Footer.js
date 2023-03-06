import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <div class="footer-icons">
              <Link to="mailto:wmohammad83@icloud.com">
                <i class="fa-regular fa-envelope"></i>
              </Link>
              <Link
                target="_blank"
                to="https://uk.linkedin.com/in/waseem-mohammad-a587061b2?original_referer=https%3A%2F%2Fwww.google.com%2F"
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link target="_blank" to="https://github.com/wmohammad83">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-12">
            <p class="py-4">
              Copyright &copy; Waseem Mohammad {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
