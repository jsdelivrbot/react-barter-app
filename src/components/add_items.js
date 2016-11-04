import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {submitItem} from '../actions/index';

class AddItems extends Component {

	checkInfo(event, image, name, description, handleSubmit) {
		event.preventDefault();
		console.log(image)
		if (image && name.value && description.value) {
			console.log('info is good!');
			handleSubmit(this.props.submitItem);
		} else {
			alert('Item information incomplete.');
		}
	}

	render() {
		const {fields: {image, name, description}, handleSubmit} = this.props;
		return (
			<form onSubmit={event => {this.checkInfo(event,image,name,description,handleSubmit)}}>
				<div className='form-group input-std'>
					<input type='file' {...image}/>	
				</div>
				<div className='form-group input-std'>
					<label>Item Name</label>
					<input className='form-control' type="text" {...name}/>
				</div>
				<div className='form-group input-std'>
					<label>Item Description</label>
					<textarea className='form-control' style={{'height':'150px'}} {...description}/>
				</div>
				<button className='submit-button'>Add Item</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'add-item',
	fields: ['image', 'name', 'description']
}, null, {submitItem})(AddItems);