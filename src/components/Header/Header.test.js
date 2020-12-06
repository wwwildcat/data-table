import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { startLoad } from '../../store/actions';

const mockStore = configureStore([]);
let store;

describe('Header component should dispatch correct action', () => {
	beforeEach(() => {
		store = mockStore({});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Header />
				</Provider>);
	});

	it('on small button click', () => {
		fireEvent.click(screen.getByTestId('small-header-button'));

		expect(store.dispatch).toHaveBeenCalledTimes(2);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			1, startLoad()
		);
	});

	it('on large button click', () => {
		fireEvent.click(screen.getByTestId('large-header-button'));

		expect(store.dispatch).toHaveBeenCalledTimes(2);
		expect(store.dispatch).toHaveBeenNthCalledWith(
			1, startLoad()
		);
	});
});