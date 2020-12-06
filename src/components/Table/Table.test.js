import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';
import { setSortProp, toggleSortOrder, sortData, setCurrentRecord } from '../../store/actions';

const mockStore = configureStore([]);
let store;

describe('Table component should correct render', () => {
	beforeEach(() => {
		store = mockStore({
			pageData: [{
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
			}],
			sortProp: 'id',
			sortOrder: true,
		});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Table />
				</Provider>);
	});

	it('arrow in table header', () => {
		expect(screen.getByTestId('table-header-id')).toContainElement(screen.getByTestId('arrow-id'));
	});

	it('arrow direction in table header', () => {
		expect(screen.getByTestId('arrow-id')).toHaveClass('Table__icon_type_up');
	});

	it('table rows', () => {
		expect(screen.getByTestId('table')).toContainHTML('<tr><td class="Table__cell">339</td><td class="Table__cell">Jan</td><td class="Table__cell">Denton</td><td class="Table__cell">JGalligan@libero.com</td><td class="Table__cell">(391)430-6468</td></tr>');
	});
});

describe('Table component should dispatch correct actions', () => {
	beforeEach(() => {
		store = mockStore({
			pageData: [{
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
			}],
			sortProp: 'id',
			sortOrder: false,
		});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Table />
				</Provider>);
	});

	it('on table header click', () => {
		fireEvent.click(screen.getByTestId('table-header-email'));

		expect(store.dispatch).toHaveBeenCalledTimes(2);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			1, setSortProp('email')
		);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			2, sortData()
		);
	});

	it('on table header second click', () => {
		fireEvent.click(screen.getByTestId('table-header-id'));

		expect(store.dispatch).toHaveBeenCalledTimes(2);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			1, toggleSortOrder()
		);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			2, sortData()
		);
	});

	it('on table click', () => {
		fireEvent.click(screen.getByText('339'));

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			setCurrentRecord({
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
			})
		);
	});
});