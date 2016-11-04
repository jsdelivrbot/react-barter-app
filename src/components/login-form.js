import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class LoginForm extends Component {
	render() {
		return (
			
		);
	}
}

export default reduxForm ({
	form: 'login',
	fields: ['email', 'password']
})(Login)