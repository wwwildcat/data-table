import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer/FlexContainer';
import { addRecord } from '../../store/actions';
import { existTraverse } from '../../store/utils';
import { formData } from '../contentData';
import './Form.css';

const mapDispatchToProps = (dispatch) => ({
	handleFormSubmit: (record) => {
		dispatch(addRecord(record));
	}
});

const Form = ({ handleFormSubmit }) => {
	const [newRecord] = useState({
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: {
			streetAddress: '',
			city: '',
			state: '',
			zip: ''
		},
		description: '',
	});
	const [buttonEnable, setButtonEnable] = useState(false);

	const handleInputChange = (e) => {
		const prop = e.target.id;

		if (prop in newRecord) {
			newRecord[prop] = e.target.value;
		} else if (prop in newRecord.address) {
			newRecord.address[prop] = e.target.value;
		}

		if (existTraverse(newRecord, (newRecord, prop) => newRecord[prop] === '')) {
			setButtonEnable(false);
		} else {
			setButtonEnable(true);
		}
	}

	return (
		<form className="Form" data-testid="form" onSubmit={(e) => {
			e.preventDefault();
			handleFormSubmit(newRecord);
		}}>
			<FlexContainer type="form">
				{formData.map((item, index) =>
					<div key={index} className="Form__item">
						<label className="Form__label" htmlFor={item.id}>{item.text}</label>
						<input
							className="Form__input"
							data-testid={`form-input-${item.id}`}
							id={item.id}
							onChange={handleInputChange}
						/>
					</div>)}
				<button disabled={!buttonEnable} className="Button" data-testid="form-button">
					Add
				</button>
			</FlexContainer>
		</form>
	)
};

export default connect(null, mapDispatchToProps)(Form);