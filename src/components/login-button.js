import React, {Component} from 'react';
import {Link} from 'react-router';

export default (props) => {

	if (props.signup) {
		return <Link to='/signup' className='btn btn-primary'>Sign Up</Link>
	}

	return <Link to='/login' className='btn btn-primary'>Log In</Link>
	
	
}