import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import { addRecord } from '../../store/actions';
import { formData } from '../contentData';

const mockStore = configureStore([]);
let store;

describe('Form component', () => {
	beforeEach(() => {
		store = mockStore({});

		store.dispatch = jest.fn();

		render(<Provider store={store}>
					<Form />
				</Provider>);
	});

	it('should disable button if there are empty fields', () => {
		fireEvent.change(screen.getByTestId('form-input-id'), { target: { value: '1' } });

		expect(screen.getByTestId('form-button')).toHaveAttribute('disabled');
	});

	it('should enable button if there are empty fields', () => {
		formData.forEach(item => fireEvent.change(screen.getByTestId(`form-input-${item.id}`), { target: { value: '1' } }));

		expect(screen.getByTestId('form-button')).not.toHaveAttribute('disabled');
	});

	it('should dispatch correct action on form submit', () => {
		formData.forEach(item => fireEvent.change(screen.getByTestId(`form-input-${item.id}`), { target: { value: '1' } }));
		fireEvent.click(screen.getByTestId('form-button'));

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			addRecord({
				id: '1',
				firstName: '1',
				lastName: '1',
				email: '1',
				phone: '1',
				address: {
					streetAddress: '1',
					city: '1',
					state: '1',
					zip: '1'
				},
				description: '1',
			})
		);
	});
});