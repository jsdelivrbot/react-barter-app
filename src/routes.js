import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import AllItems from './components/all_items';
import YourItems from './components/your_items';
import AddItems from './components/add_items';
import Transaction from './components/transaction';

import { 
	getUser,
	fetchItems
} from './actions/index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="signup" component={Signup} />
		<Route path="login" component={Login} />
		<Route path="all-the-stuff" component={AllItems} />
		<Route path="your-stuff" component={YourItems} />
		<Route path="add-stuff" component={AddItems} />
		<Route path="swap-stuff" component={Transaction} />
	</Route>
);