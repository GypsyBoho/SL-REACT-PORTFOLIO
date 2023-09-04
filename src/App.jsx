// import { useState } from 'react';
import './App.css' // imports the default styling
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <main>
      <Header />
      <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
