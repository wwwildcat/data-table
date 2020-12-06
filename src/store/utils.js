import { MAX_ROWS_ON_PAGE } from '../constants';

export const existTraverse = (obj, cb) => {
	for (let prop in obj) {
		if (typeof(obj[prop]) === 'object' && existTraverse(obj[prop], cb)) {
			return true;
		} else if (cb(obj[prop])) {
			return true;
		}
	}
	return false;
}

export const pageUtil = (data, page) => data.slice((page - 1) * MAX_ROWS_ON_PAGE, page * MAX_ROWS_ON_PAGE);
export const lastPageUtil = (data) => Math.ceil(data.length / MAX_ROWS_ON_PAGE);

export const sortUtil = (data, prop, order) => data.sort((a, b) => {
	if (order) { // ascending
		if (a[prop] > b[prop]) {
			return 1;
		}
		if (a[prop] < b[prop]) {
			return -1;
		}
	} else { // descending
		if (a[prop] < b[prop]) {
			return 1;
		}
		if (a[prop] > b[prop]) {
			return -1;
		}
	}
	return 0;
});

export const filterUtil = (data, filterValue) =>
	data.filter(obj => existTraverse(obj, arg => typeof(arg) === 'string' && arg.toLowerCase().includes(filterValue)));