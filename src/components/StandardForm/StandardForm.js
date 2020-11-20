import React, { Component } from 'react';



class StandardForm extends Component {
    state = {
        username: '', usernameValid: false,
        email: '', emailValid: false,
        password: '', passwordValid: false,
        passwordConfirm: '', passwordConfirmValid: false,
        formaValid: false,
        errorMsh: {}
    }

    handleChange = (event) => {
        const { target: { id, value } } = event
        this.setState({ [id]: value })
    };

    
    
    validateUsername = () => {
        const { username } = this.state;
        let usernameValid = true;
        let errorMsg = { ...this.state.errorMsg }

        if (username.length < 6 || username.length > 15) {
            usernameValid = false;
            errorMsg.username = 'Username should be betweeen 6 and 15 characters'
        }
        this.setState({ usernameValid, errorMsg });
    }

    




    render() {
        return (
            <div>
                <h5>Standard Form</h5>
                <form>
                    {/* Username */}
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' id='username' value={this.state.username}
                            onChange={this.handleChange} />
                    </div>

                    {/* Email */}
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control' id='email' value={this.state.email} onChange={this.handleChange} />
                    </div>

                    {/* Passworrd */}
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' value={this.state.password} onChange={this.handleChange} />
                    </div>

                    {/* Confirm Password */}
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password </label>
                        <input type='password' className='form-control' id='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>

                </form>
            </div>
        );
    }
}

export default StandardForm;