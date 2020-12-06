import React from 'react';
import { connect } from 'react-redux';
import { getCurrentPageData } from '../../store/actions';
import './Pager.css'

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
    lastPage: state.lastPage,
});

const mapDispatchToProps = (dispatch) => ({
	handlePagerChange: (value) => {
		dispatch(getCurrentPageData(value));
	}
});

const Pager = ({ currentPage, lastPage, handlePagerChange }) => (
	<div className="Pager" data-testid="pager">
		<span>Страница </span>
		<input
			className="Pager__input"
			data-testid="pager-input"
			onChange={(e) => handlePagerChange(e.target.value)}
			type="number"
			min="1"
			max={lastPage}
			value={currentPage}
		/>
		<span> из {lastPage} </span>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Pager);