import {
	FETCH_ITEMS
} from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case FETCH_ITEMS:
		return { ...state, ...action.payload };
	default:
		return state;
	}
}