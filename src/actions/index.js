import axios from 'axios';
import faker from 'faker';

export const FETCH_ITEMS = 'FETCH_ITEMS';

const BASE_URL = 'http://172.31.99.29';
const QUERY_URL = (endpoint) => `${BASE_URL}${endpoint ? `/${endpoint}/` : ''}`;

export function fetchItems() {
	// const promise = axois.get(QUERY_URL('items'));

	// return {
	// 	type: FETCH_ITEMS,
	// 	payload: promise
	// };

	const tmp = {
		type: FETCH_ITEMS,
		payload: {
			1: { id: 1, title: faker.lorem.words(), description: faker.lorem.lines(), imgUrl: 'lorempixel.com/400/400/' },
			2: { id: 2, title: faker.lorem.words(), description: faker.lorem.lines(), imgUrl: 'lorempixel.com/400/400/' },
			3: { id: 3, title: faker.lorem.words(), description: faker.lorem.lines(), imgUrl: 'lorempixel.com/400/400/' },
			4: { id: 4, title: faker.lorem.words(), description: faker.lorem.lines(), imgUrl: 'lorempixel.com/400/400/' },
			5: { id: 5, title: faker.lorem.words(), description: faker.lorem.lines(), imgUrl: 'lorempixel.com/400/400/' }
		}
	}
	return tmp;

}