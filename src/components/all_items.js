import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

const ItemContainer = ({ item }) => {
	return (
		<div className="item-container">
			<img src={item.imgUrl} alt={item.title} />
			<div className="text-center">{item.title}</div>
		</div>
	);
};

const Ticker = (props) => {
	return (
		<div className="well">
			<p className="ticker-text">
				<span className="flavor-text">Time Left: </span>
				<span className="time">5</span>
				<span className="unit">days</span>
			</p>
		</div>
	);
}

class AllItems extends Component {
	componentWillMount() { // rewatch how to use onEnter to call an action, it wasn't working earlier
		this.props.fetchItems();
	}

	render() {
		return (
			<div>	
				<h1 className="reg-header">All Items</h1>
				<Ticker />
				<div className="all-items">
					<ReactCSSTransitionGroup transitionName="item-bounce"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={150}>
						{
							Object.values(this.props.items).map((item, i) =>
								<ItemContainer key={i} item={item} />)
						}
					</ReactCSSTransitionGroup>
				</div>
				<Link to="/add-stuff" className="end-of-list-btn">Add an Item</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems })(AllItems);