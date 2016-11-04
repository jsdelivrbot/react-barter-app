import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import AllItems from './components/all_items';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="all-the-stuff" component={AllItems} />
	</Route>
);