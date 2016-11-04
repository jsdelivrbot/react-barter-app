import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {submitSignup} from '../actions/index';

class Signup extends Component {

	checkPassword(event, email, password, passcheck, handleSubmit) {
		console.log(password, passcheck);
		event.preventDefault();
		if (password.value === passcheck.value) {
			if (email.value && passcheck.value && password.value) {
				console.log('password good');
				handleSubmit(this.props.submitSignup);
			} else {
				console.log('info not filled out');
			}
			
		} else {
			console.log('wrong password');
		}
	}

	render() {
		const {fields: {email, password, passcheck}, handleSubmit} = this.props;
		return (
			<form onSubmit={event => { this.checkPassword(event, email, password, passcheck, handleSubmit) }}>
				<div className='form-group'>
					<label>Email</label>
					<input type="text" className='form-control' {...email} />
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input type="password" className='form-control' {...password} />
				</div>
				<div className='form-group'>
					<label>Confirm Password</label>
					<input type="password" className='form-control' {...passcheck} />
				</div>
				<button className='submit-button'>Create Account</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passcheck']
}, null, {submitSignup})(Signup);