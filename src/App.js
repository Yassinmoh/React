import React, { Component } from 'react'
import Styled from 'styled-components'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'
import Contact from './Components/Contact/contact'
import Container from './Components/Container/container'


const App=()=> {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/" exact element={<Container/>} />
            <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    ); 
}

export default App;