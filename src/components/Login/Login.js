import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleOnSubmit} >
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" name="email" onChange={this.handleInputChange} />
                <label htmlFor="password">Hasło:</label>
                <input type="text" id="password" name="password" onChange={this.handleInputChange} />
                <button type="submit" className="login-button-submit">Zaloguj się</button>
            </form>
        )
    }
}

export default Login;