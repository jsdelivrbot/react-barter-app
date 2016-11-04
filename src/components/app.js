import React, { Component } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
	return (
		<div className="navbar-wrapper">
			<ul className="navbar-options">
				<li><Link className="option" to="/all-the-stuff">All Items</Link></li>
				<li><Link className="option" to="/your-stuff">Your Items</Link></li>
				<li><Link className="option" to="/add-stuff">Add Item</Link></li>
			</ul>
		</div>
	);
}

export default class App extends Component {
  render() {
    return (
      <div>
	      <Navbar />
	      <div>{this.props.children}</div>
      </div>
    );
  }
}
