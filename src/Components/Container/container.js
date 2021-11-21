import React, { Component } from 'react'
import Styled from 'styled-components'
import Home from './../Home/home'
import About from './../About/about'
import Profile from './../Profile/profile'
import Portfolio from './../Portfolio/portfolio'
import SocailMedia from './../SocailMedia/socialMedia'
import Work from './../Work/work'
import Footer from './../Footer/footer'

class Container extends Component {
    render() { 
        return (
        <div>
            <Home/>
            <Work/>
            <Portfolio/>
            <Profile/>
            <About/>
            <SocailMedia/>
            <Footer/>
        </div>
        );
    }
}
 
export default Container;