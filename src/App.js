import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchange from './components/Exchange'
import News from './components/News'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetail from './components/CryptoDetail'
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import './App.css'

import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
        <>
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <div className="main-content">
                    <Routes>
                            <Route exact path='/' element={<HomePage/>} />
                            <Route exact path='/home' element={<HomePage/>} />
                            <Route exact path='/exchanges' element={<Exchange/>} />
                            <Route exact path='/news' element={<News/>} />
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                            <Route exact path='/crypto/:cryptoId' element={<CryptoDetail/>} />

                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                </div>
                
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>

        </>
  )

  
};

export default App;
