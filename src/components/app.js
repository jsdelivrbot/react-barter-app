import React, { Component } from 'react';
import { Link } from 'react-router';

// not a great place to put the getUser call, 
// but the only option for now
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/index';

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

class App extends Component {
	componentWillMount() {
		this.props.getUser();
	}

	render() {
    return (
      <div>
	      <Navbar />
	      <div>{this.props.children}</div>
      </div>
    );
  }
}

export default connect(null, { getUser })(App);





