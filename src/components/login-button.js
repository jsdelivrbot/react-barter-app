import React, {Component} from 'react';
import {Link} from 'react-router';

export default (props) => {

	if (props.signup) {
		return <Link to='/signup' className='login-button'>Sign Up</Link>
	}

	return <Link to='/login' className='login-button'>Log In</Link>
	
	
}