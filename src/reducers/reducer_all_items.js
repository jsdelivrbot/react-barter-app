import {
	INITIAL_STATE,
	GET_USER,
	FETCH_ITEMS
} from '../actions/index';

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case FETCH_ITEMS:
		return { ...state, ...action.payload };
	case GET_USER:
		return state;
	default:
		return state;
	}
}