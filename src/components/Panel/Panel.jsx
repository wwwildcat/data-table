import React, { useRef } from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer/FlexContainer';
import { filterData, toggleForm } from '../../store/actions';

const mapStateToProps = (state) => ({
	filterOnClick: state.filterOnClick,
});

const mapDispatchToProps = (dispatch) => ({
    handleFilter: (value) => {
		dispatch(filterData(value));
	},
	handleShowForm: () => {
		dispatch(toggleForm());
    }
});

const Panel = ({ filterOnClick, handleFilter, handleShowForm }) => {
	const filterInput = useRef(null);

	return (
		<div data-testid="panel">
			<FlexContainer type="panel">
				<form className="Form" onSubmit={(e) => {
					e.preventDefault();
					if (filterOnClick) {
						handleFilter(filterInput.current.value);
					}
				}}>
					<input
						className="Form__input"
						data-testid="filter-input"
						onChange={(e) => {
							if (!filterOnClick) {
								handleFilter(e.target.value);
							}
						}}
						placeholder="Filter..."
						ref={filterInput}
						type="search"
					/>
					<button className="Button" data-testid="filter-button" type="submit">
						Apply
					</button>
				</form>
				<button className="Button" data-testid="show-form-button" onClick={handleShowForm}>
					New record
				</button>
			</FlexContainer>
		</div>
	)
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);