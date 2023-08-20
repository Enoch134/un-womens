import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5 bg-primary-subtle">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              UN Women is the UN organization dedicated to gender equality and
              the empowerment of women. A global champion for women and girls,
              UN Women was established to accelerate progress on meeting their
              needs worldwide.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
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

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/assets/images/home/UNWomenAfrica.png"
            alt="About Us"
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-primary fw-bold mb-4">Who we are</h1>
          <p className="lead mb-4">
            Through regional offices in Dakar and Nairobi, and a number of
            country and multi-country offices, UN Women implements programmes
            tailored to individual countries, in close collaboration with
            governments, the UN system and civil society. UN Women is
            implementing the programme “Making Every Woman and Girl Count:
            Supporting the Monitoring and Implementation of the SDGs through
            Better Production and use of Gender Statistics” to support countries
            in implementing the 2030 Global Agenda.
          </p>
        </div>
      </div>

      <div className="row bg-danger-subtle" style={{ marginTop: "30px" }}>
        <div className="col-md-6 d-flex justify-content-center ">
          <img
            src="/assets/images/home/women1.jpg"
            alt="About Us"
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-primary fw-bold mb-4"> Status of women </h1>
          <p className="lead mb-4">
            Gender equality is not only a basic human right, but its achievement
            has enormous socio-economic ramifications. Empowering women fuels
            thriving economies, spurring productivity and growth. Yet gender
            inequalities remain deeply entrenched in every society. Women lack
            access to decent work and face occupational segregation and gender
            wage gaps. They are too often denied access to basic education and
            health care. Women in all parts of the world suffer violence and
            discrimination. They are under-represented in political and economic
            decision-making processes. Over many decades, the United Nations has
            made significant progress in advancing gender equality, including
            through landmark agreements such as the Beijing Declaration and
            Platform for Action and the Convention on the Elimination of All
            Forms of Discrimination against Women (CEDAW).
          </p>
        </div>
      </div>

      <div class="container text-center bg-info" style={{marginTop:"70px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <div class="col" style={{ paddingTop: "30px" }}>
          <div class="col">
            <p>
              UN Women, International Capital Market Association and IFC launch
              new guide on the use of sustainable bonds to advance gender
              equality
            </p>
          </div>
          <div class="col">
            UN Women is implementing the programme “Making Every Woman and Girl
            Count: Supporting the Monitoring and Implementation of the SDGs
            through Better Production and use of Gender Statistics” to support
            countries in implementing the 2030 Global Agenda. UN Women, IFC and
            the International Capital Market Association (ICMA) today launched a
            new practical guide to using sustainable bond issuances to advance
            gender equality, entitled “Bonds to Bridge the Gender Gap: A
            Practitioner’s Guide to Using Sustainable Debt for Gender Equality”.
            UN Women, International Capital Market Association and IFC launch
            new guide on the use of sustainable bonds to advance gender equality
            Gender inequalities persist in every country and society around the
            world but COVID-19 has revealed how the crisis has disproportionally
            affected women. With less than a decade remaining to achieve the
            2030 Agenda for Sustainable Development, financing solutions that
           
          </div>
        </div>
        <div class="row" style={{marginTop:'70PX'}}>
          <div class="col" style={{fontSize:"70PX", color:"white"}}>44M businesses</div>
          <div class="col" style={{fontSize:"70PX", color:"white"}}>43M  <br/><span>SME</span> </div>
          <div class="col" style={{fontSize:"70PX", color:"white"}}>51M <br/> SOHO </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
