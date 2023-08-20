import React from "react";
import { Link, NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div style={{ marginTop: "50PX" }}>
  
      <div className="container py-5 my-5 bg-primary-subtle">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Market Place</h1>
            <p className="lead mb-4">
              UN Women supports UN Member States as they set global standards
              for achieving gender equality, and works with governments and
              civil society to design laws, policies, programmes and services
              needed to ensure that the standards are effectively implemented
              and truly benefit women and girls worldwide. It works globally to
              make the vision of the Sustainable Development Goals a reality for
              women and girls and stands behind women’s equal participation in
              all aspects of life, focusing on four strategic priorities:
            </p>
            <NavLink to="/readMore" className="btn btn-outline-primary px-3">
              Read more....
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/home/unwomenabout.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>

      <div className="container py-5 my-5 bg-primary-subtle">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/home/women5.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Peace and security</h1>
            <p className="lead mb-4">
              UN Women supports UN Member States as they set global standards
              for achieving gender equality, and works with governments and
              civil society to design laws, policies, programmes and services
              needed to ensure that the standards are effectively implemented
              and truly benefit women and girls worldwide. It works globally to
              make the vision of the Sustainable Development Goals a reality for
              women and girls and stands behind women’s equal participation in
              all aspects of life, focusing on four strategic priorities:
            </p>
            <NavLink to="/readMore5" className="btn btn-outline-primary px-3">
              Read more....
            </NavLink>
          </div>
        
        </div>
      </div>

      <div className="container py-5 my-5 bg-primary-subtle">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Women on the move</h1>
            <p className="lead mb-4">
              UN Women supports UN Member States as they set global standards
              for achieving gender equality, and works with governments and
              civil society to design laws, policies, programmes and services
              needed to ensure that the standards are effectively implemented
              and truly benefit women and girls worldwide. It works globally to
              make the vision of the Sustainable Development Goals a reality for
              women and girls and stands behind women’s equal participation in
              all aspects of life, focusing on four strategic priorities:
            </p>
            <NavLink to="/readMore" className="btn btn-outline-primary px-3">
              Read more....
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/home/women1.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>

      <div className="container py-5 my-5 bg-primary-subtle">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/home/women2.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Work and priorities</h1>
            <p className="lead mb-4">
              UN Women supports UN Member States as they set global standards
              for achieving gender equality, and works with governments and
              civil society to design laws, policies, programmes and services
              needed to ensure that the standards are effectively implemented
              and truly benefit women and girls worldwide. It works globally to
              make the vision of the Sustainable Development Goals a reality for
              women and girls and stands behind women’s equal participation in
              all aspects of life, focusing on four strategic priorities:
            </p>
            <NavLink to="/readMore" className="btn btn-outline-primary px-3">
              Read more....
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
