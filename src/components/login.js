import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

class Login extends Component {
	render() {
		const {fields: {email, password}, handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Email</label>
					<input type="text" className='form-control' {...email} />
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input type="text" className='form-control' {...password}/>
				</div>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
		);
	}
}

export default reduxForm ({
	form: 'login',
	fields: ['email', 'password']
})(Login);