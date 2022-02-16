import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
        <>
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Main/>
                

                <div className="footer">
                    <Footer/>
                </div>
            </div>

        </div>

        </>
  )

  
};

export default App;
