import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Pager from './Pager';
import { getCurrentPageData } from '../../store/actions';

const mockStore = configureStore([]);
let store;

describe('Pager component', () => {
	beforeEach(() => {
		store = mockStore({
			currentPage: 2,
			lastPage: 11,
		});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Pager />
				</Provider>);
	});

	it('should render current page correctly', () => {
		expect(screen.getByTestId('pager-input')).toHaveValue(2);
	});

	it('should render last page correctly', () => {
		expect(screen.getByTestId('pager')).toHaveTextContent('11');
	});

	it('should dispatch correct action if input value was changed', () => {
		fireEvent.change(screen.getByTestId('pager-input'), { target: { value: 5 } })

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			getCurrentPageData('5')
		);
	});
});