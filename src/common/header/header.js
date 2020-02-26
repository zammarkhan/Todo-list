import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render() {
        return (
            <div >
                <h1 className="header">{this.props.heading}</h1>
                <h2 className ="subHeading">{this.props.subHeading}</h2>
            </div>
        );
    }
}

export default Header;