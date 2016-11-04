import React, { Component } from 'react';
import MainTitle from './main-title';
import LoginButton from './login-button';

export default class Home extends Component {
	render() {
		return (
			<div>
				<MainTitle />
				<LoginButton />
				<LoginButton signup='1'/>	
			</div>
			
		);
	}
}