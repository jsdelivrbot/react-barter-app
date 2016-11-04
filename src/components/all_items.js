import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';

class AllItems extends Component {
	componentWillMount() { // rewatch how to use onEnter to call an action, it wasn't working earlier
		this.props.fetchItems();
	}

	render() {
		return (
			<div>All Items are Here</div>
		);
	}
}

function mapStateToProps(state) {
	return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems })(AllItems);