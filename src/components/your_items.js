import React, { Component } from 'react';
import { connect } from 'react-redux';

class YourItems extends Component {
	render() {
		const { user: { info: { moniker } } } = this.props;

		return (
			<div>
				<h1 className="reg-header">{moniker}</h1>
				<div className="lower-info-container">
					<div className="your-item">
						<h3>Your Stuff</h3>
						<img src="http://www.ebike-evasion.fr/wp-content/uploads/2014/04/placeholder-840x630.png" alt="Your Stuff"/>
					</div>
					<div className="prev-transactions">
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(YourItems);