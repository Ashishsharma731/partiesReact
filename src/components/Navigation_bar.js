import React from "react";
import Container from 'react-bootstrap/Container';
function Navigation() {

    return(
        <>
        <Container fluid="md">
            <div>
                <a className="nav-bar-img">
                <img src="https://thepixelcurve.com/html/techwix/img/logo.png"></img>
                </a>
            </div>
        <div>
            <ul className="nav-bar">
                <li className="nav-bar-item">Home</li>
                <li className="nav-bar-item">Demo</li>
                <li className="nav-bar-item">Features</li>  
                <li className="nav-bar-item">Support</li>
            </ul>
        </div>
        <div>
            <button className="nav-bar-button">BuyNow</button>
        </div>
        </Container>
        </>
    )
}
export default Navigation