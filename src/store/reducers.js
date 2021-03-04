import {
	START_LOAD,
	GET_DATA,
	GET_DATA_ERROR,
	GET_CURRENT_PAGE_DATA,
	SET_SORT_PROP,
	TOGGLE_SORT_ORDER,
	SORT_DATA,
	TOGGLE_FILTER_EVENT,
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
			const currentPage = action.payload || state.currentPage;

			return {
				...state,
				currentPage: currentPage,
				pageData: pageUtil(state.currentData, currentPage),
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

		case TOGGLE_FILTER_EVENT:
			return {
				...state,
				filterOnClick: !state.filterOnClick,
			};

		case FILTER_DATA:
			const filteredData = filterUtil(state.data, action.payload.toLowerCase());

			return {
				...state,
				currentData: filteredData,
				currentPage: 1,
				lastPage: lastPageUtil(filteredData),
				pageData: pageUtil(filteredData, 1),
				currentRecord: null,
				sortProp: 'none',
			};

		case TOGGLE_FORM:
			return {
				...state,
				showForm: !state.showForm,
			};

		case ADD_RECORD:
			const newData = [action.payload].concat(state.data);

			return {
				...state,
				data: newData,
				currentData: newData,
				currentPage: 1,
				lastPage: lastPageUtil(newData),
				pageData: pageUtil(newData, 1),
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

