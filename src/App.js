import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css'



const App = () => {
  return (
        <>
        <div className="app">
            <div className="header">
                <Header />
            </div>

            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Main/>
            </div>

            <div className="footer">
                <Footer/>
            </div>

        </div>

        </>
  )

  
};

export default App;
