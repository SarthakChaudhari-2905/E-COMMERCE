import React from "react";
import "./About.css";
import { FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaPinterest, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <footer className="about-footer">
      <div className="footer-sections">
        {/* Shop Section */}
        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li>LADIES</li>
            <li>MEN</li>
            <li>KIDS</li>
            <li>HOME</li>
          </ul>
        </div>

        {/* Corporate Info */}
        <div className="footer-column">
          <h4>Corporate Info</h4>
          <ul>
            <li>CAREER AT SC</li>
            <li>ABOUT SC GROUP</li>
            <li>SUSTAINABILITY</li>
            <li>PRESS</li>
            <li>INVESTOR RELATIONS</li>
            <li>CORPORATE GOVERNANCE</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li>MY ACCOUNT</li>
            <li>FIND A STORE</li>
            <li>LEGAL & PRIVACY</li>
            <li>CONTACT</li>
            <li>SECURE SHOPPING</li>
            <li>COOKIE NOTICE</li>
            <li>COOKIE SETTINGS</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <p>
            Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </div>

      {/* Logo & Region */}
      <div className="footer-bottom">
        <h2 className="footer-logo">SC</h2>
        <p><strong>INDIA (Rs.)</strong> <a href="#">CHANGE REGION</a></p>
      </div>

      {/* Social Icons */}
      <div className="footer-socials">
        <FaInstagram />
        <FaTiktok />
        <FaSpotify />
        <FaYoutube />
        <FaPinterest />
        <FaFacebook />
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        The content of this site is copyright-protected and is the property of SC Collection.
      </p>
    </footer>
  );
};

export default About;
