import React from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer/FlexContainer';
import { startLoad } from '../../store/actions';
import { fetchData } from '../../store/thunks';
import { SMALL_DATA_SIZE, LARGE_DATA_SIZE } from '../../constants';
import './Header.css';

const mapDispatchToProps = (dispatch) => ({
    handleButtonClick: (size) => {
        dispatch(startLoad())
        dispatch(fetchData(size));
    }
});

const Header = ({ handleButtonClick }) => (
	<header className="Header">
        <FlexContainer type="header">
            <span className="Header__text">Выберите набор данных:</span>
            <button
                className="Button"
                data-testid="small-header-button"
                onClick={() => handleButtonClick(SMALL_DATA_SIZE)}
            >
                Малый
            </button>
            <button
                className="Button"
                data-testid="large-header-button"
                onClick={() => handleButtonClick(LARGE_DATA_SIZE)}
            >
                Большой
            </button>
        </FlexContainer>
    </header>
);

export default connect(null, mapDispatchToProps)(Header);