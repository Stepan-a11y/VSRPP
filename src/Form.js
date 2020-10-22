import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstName: '',
            lastName: '',
            email: ''

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstName, lastName, email } = this.state; 

        return (
          <div>
          <h1>Form character</h1>
          <h3>Add New</h3>
            <form onSubmit={this.onFormSubmit}>
                <label for="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={firstName} 
                    onChange={this.handleChange} />
                <label for="lastName">LastName</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={lastName} 
                    onChange={this.handleChange} />
                <label for="Email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
            </div>
        );
    }
}

export default Form;
