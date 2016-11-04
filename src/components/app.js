import React, { Component } from 'react';

const Navbar = () => {
	return (
		<div className="navbar-wrapper">
			<ul className="navbar-options">
				<li>All Items</li>
				<li>Your Items</li>
				<li>Add Item</li>
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
