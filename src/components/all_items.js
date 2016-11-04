import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';

const ItemContainer = ({ item }) => {
	return (
		<div className="item-container">
			<img src={item.imgUrl} alt={item.title} />
			<div className="text-center">{item.title}</div>
		</div>
	);
};

class AllItems extends Component {
	componentWillMount() { // rewatch how to use onEnter to call an action, it wasn't working earlier
		this.props.fetchItems();
	}

	render() {
		return (
			<div>	
				<div className="text-center">All Items</div>
				<div className="text-center">Time Remaining: 5 days</div>
				<div className="all-items">
						{
							Object.values(this.props.items).map((item, i) =>
								<ItemContainer key={i} item={item} />)
						}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems })(AllItems);