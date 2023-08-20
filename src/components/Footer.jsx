import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>un-women-sl</h4>
            <h5 className="list-unstyled">
              <li>23279482050</li>
              <li>Sierra Leone</li>
              <li>15 Main Moto Road</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>ABOUT US</h4>
            <ui className="list-unstyled">
              <li>Business</li>
              <li>Home</li>
              <li>Blog</li>
              <li>About US</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>UN WOMEN MARKET PLACE</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>

          <div className="col">
            <h4>WHO WE ARE</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm"  style={{paddingLeft:"320px"}}>
            &copy;{new Date().getFullYear()} UN-WOMEN MARKET PLACE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;