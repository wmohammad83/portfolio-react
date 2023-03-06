import React from "react";
import Pic from "../../images/pic.png";
import "./About.css";

function About() {
  return (
    <div className="container mt-4">
      <h2>About</h2>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <p>
            Hi I’m waseem an aspiring developer in the making, I started my
            career as a dispensing optician in 2007 where I developed an
            interest in IT and technology. I went on to take some certifications
            to kickstart my career within an IT support role and I have worked
            my way up to a cluster IT manager role supporting teaching staff and
            students across 9 academy schools. I developed an interest in
            programming through a friend and through his aspirations I started
            looking into programming and web development and after going through
            some tutorials on YouTube and Udemy, I decided that this is
            something I want to do and enrolled onto the trillogy frontend
            Bootcamp to learn more about web development.
          </p>
          <p>
            so far through my studies, not only have I learned about HTML and
            CSS, but I have also learned about the importance of creating
            responsing web pages using CSS grids and flexbox and the next stage
            is going to be working with JavaScript.
          </p>
        </div>
        {/* <div className="col-sm-12 col-md-4">
          <img className="profilePic " src={Pic} alt="Profile Picture" />
        </div> */}
      </div>
    </div>
  );
}

export default About;
