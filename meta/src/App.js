import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import {Footer, Navbar} from './Component';
import {Home,Places} from './Pages';



function App() {
  return (
    <div className="App">
        <Navbar/>
    <Routes>
    <Route path="/" element = {<Home/>} exact/>
    <Route path="/places" element = {<Places/>} exact/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
