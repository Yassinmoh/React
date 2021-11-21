import React  from 'react';
import {Link} from 'react-router-dom'
import{NavbarSection,Logo,LogoText,UlList,ListItem,Alink} from './navbarStyle.js'
import styled from 'styled-components'

const linkStyle = {
    display: 'block',
    color: '#222',
    textDecoration: 'none',
    padding:' 10px 15px',
    fontWeight: 'bold',
    };

const Navbar=()=>{
    return (
        <div>
            <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                
                <UlList>
                    <ListItem><Link to="/" style={linkStyle}>Home</Link></ListItem>
                    <ListItem><Alink href="#">Work</Alink></ListItem>
                    <ListItem><Alink href="#">Portfolio</Alink></ListItem>
                    <ListItem><Alink href="#">Resume</Alink></ListItem>
                    <ListItem><Alink href="#">About</Alink></ListItem>
                    <ListItem><Link to="/contact" style={linkStyle}>Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
        </div>
    )
}
export default Navbar