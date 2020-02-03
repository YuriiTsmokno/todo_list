import React, { PureComponent } from 'react';

export default class ItemAddForm extends PureComponent {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        if(this.state.label !== "") {
            if(this.state.label.length <= 30) {
                event.preventDefault();
                this.props.onItemAdded(this.state.label);
                this.setState({
                    label: ""
                });
            } else {
                let newStr = this.state.label.slice(0, 30);
                event.preventDefault();
                this.props.onItemAdded(newStr);
                this.setState({
                    label: ""
                });
            }
        } else {
            event.preventDefault();
            //alert("Please insert any value to input!");
        }
    };

    render() {
        return(
            <form className="item-add-form d-flex" onSubmit={this.onSubmit} >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange} 
                       placeholder="What needs to be done!" 
                       value={this.state.label} /> 
                <button className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        );
    };
};