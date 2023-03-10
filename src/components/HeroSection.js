import React, { Component } from 'react'
import "../components/HeroSection.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="head-img banner">
    <div className="bg">
      <div className="text">
        <h2>Conference | Workshops | CTF</h2>
        <h1>AEGIS 2023</h1>
        <div className='btn-1'>

       
        <Button variant="primary" as={Link} to={"/booking"}>BookTickets</Button>{" "}
        
        </div>
      </div>
    </div>
  </div>
  )
}
