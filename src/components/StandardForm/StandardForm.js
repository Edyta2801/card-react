import React, { Component } from 'react';


class StandardForm extends Component {
    render() {
        return (
            <div>
                <h5>Standard Form</h5>
                <form>
                    {/* Username */}
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' id='username' />
                    </div>

                    {/* Email */}
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control' id='email' />
                    </div>

                    {/* Passworrd */}
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' />
                    </div>

                    {/* Confirm Password */}
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Password</label>
                        <input type='password' className='form-control' id='confirmPassword' />
                    </div>

                </form>
            </div>
        );
    }
}

export default StandardForm;