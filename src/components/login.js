import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {attemptLogin} from '../actions/index';

class Login extends Component {
	render() {
		const {fields: {email, password}, handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.props.attemptLogin)}>
				<div className='form-group'>
					<label>Email</label>
					<input type="text" className='form-control' {...email} />
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input type="text" className='form-control' {...password}/>
				</div>
				<button type='submit' className='submit-button'>Submit</button>
			</form>
		);
	}
}

//Connect: first argument is mapstatetoprops, 2nd is mapdispatchtoprops
//reduxform: 1st arg is form config, 2nd is mapstatetoprops, 3rd is mapdispatchtoprops

export default reduxForm ({
	form: 'login',
	fields: ['email', 'password']
}, null, {attemptLogin})(Login);