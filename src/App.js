import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Preloader } from '../src/components/svg/Preloader.svg';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import Form from './components/Form/Form';
import Pager from './components/Pager/Pager';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import './App.css';

const mapStateToProps = (state) => ({
    loadingStatus: state.loadingStatus,
    currentRecord: state.currentRecord,
	showForm: state.showForm,
});

const App = ({ currentRecord, loadingStatus, showForm }) => (
    <div className="App" data-testid="app">
        <Header />
        {loadingStatus === 'loading' &&
            <>
                <Preloader data-testid="preloader" className="Icon-preloader"/>
                <span>Loading...</span>
            </>}
        {loadingStatus === 'error' && <div>Loading error</div>}
        {loadingStatus === 'complete' &&
            <>
                <Panel />
                {showForm && <Form />}
                <Pager />
                <Table />
                {currentRecord && <Card record={currentRecord} />}
            </>}
    </div>
);

export default connect(mapStateToProps)(App);
