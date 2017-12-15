import React from 'react';
// import { Link } from 'react-router-dom'
function topFunction() {
    document.body.scrollTop = 0; // For Safari
	var topDistance = document.documentElement.scrollTop
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Footer = () => (
    <footer>
      <div className="flexbox-container">
        <div className="logo">
          <span></span>
        </div>
      </div>
	  <button onClick={topFunction} id="myBtn" title="Go to top">Back To Top</button>
    </footer>
  )


export default Footer;
