import {
	START_LOAD,
	GET_DATA,
	GET_DATA_ERROR,
	GET_CURRENT_PAGE_DATA,
	SET_SORT_PROP,
	TOGGLE_SORT_ORDER,
	SORT_DATA,
	FILTER_DATA,
	TOGGLE_FORM,
	ADD_RECORD,
	SET_CURRENT_RECORD,
} from './actionTypes';
import { pageUtil, lastPageUtil, sortUtil, filterUtil } from './utils';

export function reducer (state, action) {
	switch (action.type) {
		case START_LOAD:
			return {
				...state,
				loadingStatus: 'loading',
			};

		case GET_DATA:
			return {
				...state,
				loadingStatus: 'complete',
				data: action.payload,
				currentData: action.payload,
				lastPage: lastPageUtil(action.payload),
				pageData: pageUtil(action.payload, state.currentPage),
				currentRecord: null,
				sortProp: 'none',
			};

		case GET_DATA_ERROR: return {
			...state,
			loadingStatus: 'error',
		};

		case GET_CURRENT_PAGE_DATA:
			return {
				...state,
				currentPage: action.payload || state.currentPage,
				pageData: pageUtil(state.currentData, action.payload || state.currentPage),
			};

		case SET_SORT_PROP:
			return {
				...state,
				sortProp: action.payload,
				sortOrder: true,
			};

		case TOGGLE_SORT_ORDER:
			return {
				...state,
				sortOrder: !state.sortOrder,
			};

		case SORT_DATA:
			return {
				...state,
				currentData: sortUtil(state.currentData, state.sortProp, state.sortOrder),
				pageData: pageUtil(state.currentData, state.currentPage),
			};

		case FILTER_DATA:
			return {
				...state,
				currentData: filterUtil(state.data, action.payload.toLowerCase()),
				currentPage: 1,
				lastPage: lastPageUtil(filterUtil(state.data, action.payload.toLowerCase())),
				pageData: pageUtil(filterUtil(state.data, action.payload.toLowerCase()), 1),
				currentRecord: null,
				sortProp: 'none',
			};

		case TOGGLE_FORM:
			return {
				...state,
				showForm: !state.showForm,
			};

		case ADD_RECORD:
			return {
				...state,
				data: [action.payload].concat(state.data),
				currentData: [action.payload].concat(state.data),
				currentPage: 1,
				lastPage: lastPageUtil([action.payload].concat(state.data)),
				pageData: pageUtil([action.payload].concat(state.data), 1),
				currentRecord: null,
				sortProp: 'none',
				showForm: false,
			};

		case SET_CURRENT_RECORD:
			return {
				...state,
				currentRecord: action.payload,
			};

		default: {
			return state;
		}
	}
}

