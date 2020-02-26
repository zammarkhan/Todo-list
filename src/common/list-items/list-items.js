import './list-items.css'
import React, { Component } from 'react';

class listitems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUpdated: false,
            updatedTextBoxValue: this.props.children

        }

    }
    isUpdated = () => {
        this.setState({
            isUpdated: true
        })
    }

    handleChange = () => {
        this.setState({
            updatedTextBoxValue: event.target.value
        })
    }

    updateTask = () => {
        this.props.onUpdateTask(this.state.updatedTextBoxValue, this.props.id)
        this.setState({
            isUpdated: false
        })
    }
    render() {
        return (
            <div className="task">

                <div style={{ fontWeight: "bolder" }}>
                    {
                        !this.state.isUpdated ?
                            this.props.children :
                            <React.Fragment>
                                <input type="text"
                                    value={this.state.updatedTextBoxValue}
                                    onChange={this.handleChange}
                                />
                                <button
                                    className="fa fa-edit"
                                    onClick={this.updateTask}>

                                </button>
                            </React.Fragment>

                    }

                </div>
                <div>
                    <i className="fa fa-trash"
                        style={{ cursor: "pointer" }}
                        onClick={this.props.onDeleteTask}
                    ></i>
                    {   
                        !this.state.isUpdated ?
                            <i className="fa fa-edit"
                                style={{ paddingLeft: "5px", cursor: "pointer" }}
                                onClick={this.isUpdated}
                            ></i> : null
                    }


                </div>

            </div>
        );
    }
}

export default listitems;
