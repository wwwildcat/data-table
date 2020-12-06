import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Arrow } from '../svg/Arrow.svg';
import { setSortProp, toggleSortOrder, sortData, setCurrentRecord } from '../../store/actions';
import { headerData } from '../contentData';
import './Table.css';

const mapStateToProps = (state) => ({
	pageData: state.pageData,
	sortProp: state.sortProp,
	sortOrder: state.sortOrder,
});

const mapDispatchToProps = (dispatch) => ({
    handleTableHeaderClick: (id, currentsortProp) => {
		if (id === currentsortProp) {
			dispatch(toggleSortOrder());
		} else {
			dispatch(setSortProp(id));
		}
		dispatch(sortData());
	},
	handleTableClick: (obj) => {
		dispatch(setCurrentRecord(obj));
	}
});

const Table = ({ handleTableHeaderClick, handleTableClick, pageData, sortProp, sortOrder }) => (
	<table className="Table" data-testid="table">
		<tr>
			{headerData.map((item, index) =>
				<td
					className="Table__cell Table__cell_header"
					data-testid={`table-header-${item.id}`}
					key={index}
					onClick={() => handleTableHeaderClick(item.id, sortProp)}
					id={item.id}
				>
					{item.text}
					{sortProp === item.id &&
						<Arrow
							data-testid={`arrow-${item.id}`}
							className={`Icon-arrow Table__icon ${sortOrder && 'Table__icon_type_up'}`}
						/>}
				</td>)}
		</tr>
		{pageData.map((obj, index) =>
			<tr key={index}>
				{headerData.map((item, i) =>
					<td key={i} className="Table__cell" onClick={() => handleTableClick(obj)}>{obj[item.id]}</td>)}
			</tr>)}
	</table>
);


export default connect(mapStateToProps, mapDispatchToProps)(Table);