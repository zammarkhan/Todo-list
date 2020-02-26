import './button.css'
import React, { Component } from 'react';


class CustomButton extends Component {
    render() {
        return (
            <button  className="custom-button" onClick ={this.props.onClick}>
                {this.props.children}
            </button>
            
        );
    }
}

export default CustomButton;