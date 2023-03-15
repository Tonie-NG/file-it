import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <hr />
      <div className="footer__container">
        <div className="footer_elements">
          <img
            src="https://cdn.simpleicons.org/github"
            alt=""
            height={30}
            width={30}
          />
          Github
        </div>
        <div className="footer_elements">
          <img
            src="https://cdn.simpleicons.org/twitter"
            alt=""
            height={30}
            width={30}
          />
          Twitter
        </div>
        <div className="footer_elements">
          <img
            src="https://cdn.simpleicons.org/Proto.io"
            alt=""
            height={30}
            width={30}
          />
          Website
        </div>
      </div>
      <p className="footer__copy">&#169; Tonie. All rights reserved</p>
    </div>
  );
}

export default Footer;
