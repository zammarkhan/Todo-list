import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
        return(
        <input className="input" onChange={this.props.onChange} placeholder={this.props.placeholder} value ={this.props.value}></input>
        )}
}

export default Input;