export const startLoad = () => ({
	type: 'START_LOAD',
});

export const getData = (json) => ({
	type: 'GET_DATA',
	payload: json,
});

export const getDataError = (err) => ({
	type: 'GET_DATA_ERROR',
	payload: err,
});

export const getCurrentPageData = (page) => ({
	type: 'GET_CURRENT_PAGE_DATA',
	payload: page,
});

export const setSortProp = (value) => ({
	type: 'SET_SORT_PROP',
	payload: value,
});

export const toggleSortOrder = () => ({
	type: 'TOGGLE_SORT_ORDER',
});

export const sortData = () => ({
	type: 'SORT_DATA',
});

export const toggleFilterEvent = () => ({
	type: 'TOGGLE_FILTER_EVENT',
});

export const filterData = (value) => ({
	type: 'FILTER_DATA',
	payload: value,
});

export const toggleForm = () => ({
	type: 'TOGGLE_FORM',
});

export const addRecord = (record) => ({
	type: 'ADD_RECORD',
	payload: record,
});

export const setCurrentRecord = (record) => ({
	type: 'SET_CURRENT_RECORD',
	payload: record,
});