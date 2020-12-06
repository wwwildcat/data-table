import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

export const initialState = {
	loadingStatus: 'pending',
	data: [],
	currentData: [],
	currentPage: 1,
	lastPage: 1,
	currentRecord: null,
	pageData: [],
	sortProp: 'none',
	sortOrder: true, // ascending - true, descending - false
	showForm: false,
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;