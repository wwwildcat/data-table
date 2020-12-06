import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockStore = configureStore([]);
let store;

describe('App component while loading data', () => {
	beforeEach(() => {
		store = mockStore({
			loadingStatus: 'loading',
		});

		render(<Provider store={store}>
					<App />
				</Provider>);
	});

	it('should render text correct when loading', () => {
		expect(screen.getByTestId('app')).toHaveTextContent('Загрузка...');
	});

	it('should render preloader when loading', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('preloader'));
	});
});

describe('App component in case of loading data error', () => {
	beforeEach(() => {
		store = mockStore({
			loadingStatus: 'error',
		});

		render(<Provider store={store}>
					<App />
				</Provider>);
	});

	it('should render text correct in error case', () => {
		expect(screen.getByTestId('app')).toHaveTextContent('Ошибка загрузки данных');
	});
});

describe('App component in case of succesful loading data', () => {
	beforeEach(() => {
		store = mockStore({
			loadingStatus: 'complete',
			pageData: [],
		});

		render(<Provider store={store}>
					<App />
				</Provider>);
	});

	it('should render panel', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('panel'));
	});

	it('should render pager when load complete', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('pager'));
	});

	it('should render table when load complete', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('table'));
	});
});

describe('App component', () => {
	beforeEach(() => {
		store = mockStore({
			loadingStatus: 'complete',
			pageData: [],
			showForm: 'true',
		});

		render(<Provider store={store}>
					<App />
				</Provider>);
	});

	it('should show form if nessesary', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('form'));
	});
});

describe('App component', () => {
	beforeEach(() => {
		store = mockStore({
			loadingStatus: 'complete',
			pageData: [],
			currentRecord: {
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
		});

		render(<Provider store={store}>
					<App />
				</Provider>);
	});

	it('should show user card if nessesary', () => {
		expect(screen.getByTestId('app')).toContainElement(screen.getByTestId('card'));
	});
});