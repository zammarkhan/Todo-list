import './List.css'
import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div >
                {this.props.children}
            </div>
            
        );
    }
}

export default List;