import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Panel from './Panel';
import { filterData, toggleForm } from '../../store/actions';

const mockStore = configureStore([]);
let store;

describe('Panel component should dispatch correct action', () => {
	beforeEach(() => {
		store = mockStore({});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Panel />
				</Provider>);
	});

	it('on filter form submit', () => {
		fireEvent.change(screen.getByTestId('filter-input'), { target: { value: 'com' } });
		fireEvent.click(screen.getByTestId('filter-button'));

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			filterData('com')
		);
	});

	it('action on show form button click', () => {
		fireEvent.click(screen.getByTestId('show-form-button'));

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			toggleForm()
		);
	});
});