import { 
	INITIAL_STATE,
	FETCH_ITEMS,
	GET_USER
} from '../actions/index';

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case FETCH_ITEMS:
		return state;
	case GET_USER:
		return { ...state, info: action.payload };
	default:
		return state;
	}
}