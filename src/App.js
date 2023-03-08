import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { RegistrationPage } from './pages/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className=''>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
