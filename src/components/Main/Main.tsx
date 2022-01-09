/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cx from "classnames";
// import { Contact, Navbar } from "..";
// import { prefix } from "../../lib/prefix";
import {
  Bitcoin,
  CloudStar,
  Decentralized,
  Laptop,
  Phone,
  Shield,
  Web,
} from "../Icons";
import { prefix } from "../../lib/prefix";
import { Contact } from "../Contact";

type NavListProps = {
  menuOpen: boolean;
};

export default function Main() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1500);
  }, []);

  const date = new Date();

  if (!showContent) {
    return (
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Nav className="main-nav">
                <NavRow>
                  <Logo href="#" className="logo">
                    <img src={`${prefix}/fsd-logo.png`} alt="Softy Pinko" />
                  </Logo>
                  <a
                    className={cx("menu-trigger", menuOpen && "active")}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span>Menu</span>
                  </a>
                </NavRow>
                <NavList
                  className={cx("nav", menuOpen && "active")}
                  menuOpen={menuOpen}
                >
                  <li>
                    <a href="#features">About</a>
                  </li>
                  <li>
                    <a href="#work-process">Work Process</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  {/* <li>
                    <a href="#pricing-plans">Pricing Tables</a>
                  </li> */}
                  {/* <li>
                    <a href="#blog">Blog Entries</a>
                  </li> */}
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </NavList>
              </Nav>
            </div>
          </div>
        </div>
      </header>
      <Welcome
        id="welcome"
        style={{ backgroundImage: `url(${prefix}/banner-bg.png)` }}
      >
        <div className="header-text">
          <div className="container">
            <HeroRow className="row">
              <div className="col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>Transforming ideas into reality</h1>
                <SubHeroText>
                  Product development, UX design, and IT consulting for
                  companies of all shapes and sizes
                </SubHeroText>
                <DiscoverButton>
                  <a href="#features" className="main-button-slider">
                    Discover More
                  </a>
                </DiscoverButton>
              </div>
            </HeroRow>
          </div>
        </div>
      </Welcome>
      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <Laptop />
                      </i>
                    </div>
                    <h5 className="features-title">WEB APPS</h5>
                    <p>
                      Applications that scale with increased traffic and storage
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <Phone />
                      </i>
                    </div>
                    <h5 className="features-title">MOBILE APPS</h5>
                    <p>
                      Feature parity and seemless UX across both Android and iOS
                      devices
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <Decentralized />
                      </i>
                    </div>
                    <h5 className="features-title">DECENTRALIZED APPS</h5>
                    <p>
                      Bridging the gap between Web2 and Web3 with a myriad of
                      technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section padding-top-70 padding-bottom-0"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src={`${prefix}/left-image.png`}
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div className="left-heading">
                <h2 className="section-title">Crafted With Design In Mind</h2>
              </div>
              <div className="left-text">
                <p>
                  We at FSD believe that great software stems from solid design.
                  User interfaces should flow sensibly and APIs should scale
                  gracefully.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section padding-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div className="left-heading">
                <h2 className="section-title">Rooted In Process</h2>
              </div>
              <div className="left-text">
                <p>
                  Process is our backbone, which includes discovery, research,
                  design, development, testing, and deployment.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src={`${prefix}/right-image.png`}
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section mini colored" id="work-process">
        <div className="mini-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                <div className="info">
                  <h1>Our Specialties</h1>
                  <p>
                    Take your product to the next level with our assorted web
                    expertise
                  </p>
                </div>
              </div>
            </div>
            <SpecialtyRow className="row">
              {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <img src={`${prefix}/work-process-item-01.png`} alt="" />
                  </i>
                  <strong>UI Development</strong>
                  <span>Define project scope</span>
                </a>
              </div> */}
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <CloudStar />
                  </i>
                  <strong>Web Development</strong>
                  {/* <span>Detect industry standards</span> */}
                </a>
              </div>
              {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <img src={`${prefix}/work-process-item-01.png`} alt="" />
                  </i>
                  <strong>API Development</strong>
                  <span>Planning and strategization</span>
                </a>
              </div> */}
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <Web />
                  </i>
                  <strong>Application Security</strong>
                  {/* <span>Bring your concept to life</span> */}
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <Shield />
                  </i>
                  <strong>Devops & Cloud</strong>
                  {/* <span>Ensure quality across environments</span> */}
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i>
                    <Bitcoin />
                  </i>
                  <strong>dApp Development</strong>
                  {/* <span>Launch product and go live</span> */}
                </a>
              </div>
            </SpecialtyRow>
          </div>
        </div>
      </section>
      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">
                  Proven custom software development agency
                </h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                {/* <p>
                  Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                  nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                  libero.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item">
                <div className="team-content">
                  <i>
                    <img src={`${prefix}/testimonial-icon.png`} alt="" />
                  </i>
                  <p>
                    FSD checked all the boxes for us. From idea inception to
                    delivery, they worked with diligence, transparency, and
                    professionalism to bring our application to life.
                  </p>
                  <div className="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="user-name">Colin McCaleb</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item">
                <div className="team-content">
                  <i>
                    <img src={`${prefix}/testimonial-icon.png`} alt="" />
                  </i>
                  <p>
                    FSD was able to take the helm on our company website and
                    knock it out of the park. We are very pleased with how it
                    turned out and will turn to them for more software solutions
                    in the future.
                  </p>
                  <div className="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="user-name">Grant Williams</h3>
                    <span>Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item">
                <div className="team-content">
                  <i>
                    <img src={`${prefix}/testimonial-icon.png`} alt="" />
                  </i>
                  <p>
                    We were extremely pleased with the level of effort FSD put
                    into designing, building, and testing our ERP platform. They
                    finished ahead of schedule and were instrumental in our
                    company's growing market share in the cannabis industry.
                  </p>
                  <div className="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="user-name">Brian Larsen</h3>
                    <span>COO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section colored" id="pricing-plans">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Pricing Plans</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Starter</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">14.50</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">60 GB space</li>
                    <li className="active">600 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li>15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
            >
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title">Premium</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">21.50</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">120 GB space</li>
                    <li className="active">1200 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li className="active">15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Advanced</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">42.00</span>
                    <span className="period">monthly</span>
                  </div>
                  <ul className="list">
                    <li className="active">250 GB space</li>
                    <li className="active">5000 GB transfer</li>
                    <li className="active">Pro Design Panel</li>
                    <li className="active">15-minute support</li>
                    <li className="active">Unlimited Emails</li>
                    <li className="active">24/7 Security</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="counter">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-bottom">
                  <strong>126</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-top">
                  <strong>63</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-bottom">
                  <strong>18</strong>
                  <span>Awards Wins</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>27</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Blog Entries</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Integer molestie aliquam gravida. Nullam nec arcu finibus,
                  imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                  molestie.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={`${prefix}/blog-item-01.png`} alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Vivamus ac vehicula dui</a>
                  </h3>
                  <div className="text">
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </div>
                  <a href="#" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={`${prefix}/blog-item-02.png`} alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Phasellus convallis augue</a>
                  </h3>
                  <div className="text">
                    Aliquam commodo ornare nisl, et scelerisque nisl dignissim
                    ac. Vestibulum finibus urna ut velit venenatis, vel ultrices
                    sapien mattis.
                  </div>
                  <a href="#" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src={`${prefix}/blog-item-03.png`} alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Nam gravida purus non</a>
                  </h3>
                  <div className="text">
                    Maecenas eu erat vitae dui convallis consequat vel gravida
                    nulla. Vestibulum finibus euismod odio, ut tempus enim
                    varius eu.
                  </div>
                  <a href="#" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="social">
                {/* <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/company/feng-shui-digital">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">
                Copyright &copy; {date.getFullYear()} Feng Shui Digital
              </p>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}

const Welcome = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  @media screen and (min-width: 977px) {
    width: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 977px) {
    flex-direction: row;
  }
`;

const Logo = styled.a`
  position: absolute;
  top: 21px;

  @media screen and (min-width: 977px) {
    position: relative;
    top: 0;
  }
`;

const NavList = styled.ul<NavListProps>`
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
`;

const DiscoverButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const SubHeroText = styled.p`
  padding-top: 10px;
`;

const HeroRow = styled.div`
  justify-content: center;
`;

const SpecialtyRow = styled.div`
  justify-content: center;
`;
