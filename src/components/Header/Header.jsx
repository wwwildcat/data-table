import React from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer/FlexContainer';
import { startLoad, toggleFilterEvent } from '../../store/actions';
import { fetchData } from '../../store/thunks';
import { SMALL_DATA_SIZE, LARGE_DATA_SIZE } from '../../constants';
import './Header.css';

const mapDispatchToProps = (dispatch) => ({
    handleButtonClick: (size) => {
        dispatch(startLoad());
        dispatch(fetchData(size));
    },

    handleRadioChange: (e) => {
        dispatch(toggleFilterEvent());
    }
});

const Header = ({ handleButtonClick, handleRadioChange }) => (
	<header className="Header">
        <FlexContainer type="header">
            <span className="Header__text">Select dataset:</span>
            <button
                className="Button"
                data-testid="small-header-button"
                onClick={() => handleButtonClick(SMALL_DATA_SIZE)}
            >
                Small
            </button>
            <button
                className="Button"
                data-testid="large-header-button"
                onClick={() => handleButtonClick(LARGE_DATA_SIZE)}
            >
                Large
            </button>
        </FlexContainer>
        <FlexContainer type="header">
            <span>Apply filter:</span>
            <label className="Header__label" htmlFor="click">on Apply button click</label>
            <input
                defaultChecked
                id="click"
                name="filter"
                onChange={handleRadioChange}
                type="radio"
                value="click"
            />
            <label className="Header__label" htmlFor="change">on change of filter input</label>
            <input
                data-testid="change-filter-radio"
                id="change"
                name="filter"
                onChange={handleRadioChange}
                type="radio"
                value="change"
            />
        </FlexContainer>
    </header>
);

export default connect(null, mapDispatchToProps)(Header);