import React, { useRef } from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer/FlexContainer';
import { filterData, toggleForm } from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
    handleFilterSubmit: (value) => {
		dispatch(filterData(value));
	},
	handleShowForm: () => {
		dispatch(toggleForm());
    }
});

const Panel = ({ handleFilterSubmit, handleShowForm }) => {
	const filterInput = useRef(null);

	return (
		<div data-testid="panel">
			<FlexContainer type="panel">
				<form className="Form" onSubmit={(e) => {
					e.preventDefault();
					handleFilterSubmit(filterInput.current.value);
				}}>
					<input
						className="Form__input"
						data-testid="filter-input"
						type="search"
						ref={filterInput}
						placeholder="Введите фильтр..."
					/>
					<button className="Button" data-testid="filter-button" type="submit">Найти</button>
				</form>
				<button className="Button" data-testid="show-form-button" onClick={handleShowForm}>Добавить запись</button>
			</FlexContainer>
		</div>
	)
};

export default connect(null, mapDispatchToProps)(Panel);