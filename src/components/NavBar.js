import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Component } from "react";
import "../components/NavBar.css";

import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import myLogo from "../assets/PuneDAO.webp";

import HomePage from "../pages/HomePage"
import RegistrationPage from "../pages/RegistrationPage";

export const NavBar = () => {
  return (
    <div>
       {/* <Router> */}
        <div > 
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="" as={Link} to={""}>
                <div className="logo">
                  <img src={myLogo} alt="" width={182} height={64} />
                </div>
              </Navbar.Brand>       
            </Container>
          </Navbar>
        </div>
        <div>
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<RegistrationPage />} />
          </Routes> */}
        </div>
      {/* </Router> */}
      
    </div>
  )
}


