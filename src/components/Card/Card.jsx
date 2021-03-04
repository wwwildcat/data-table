import React from 'react';
import './Card.css';

const Card = ({ record }) => (
	<div className="Card" data-testid="card">
		<div className="Card__text">Selected user: <b>{`${record.firstName} ${record.lastName}`}</b></div>
		<div className="Card__text">Description:</div>
		<textarea readOnly className="Card__textarea" value={record.description}></textarea>
		<div className="Card__text">Residence address: <b>{record.address.streetAddress}</b></div>
		<div className="Card__text">City: <b>{record.address.city}</b></div>
		<div className="Card__text">State: <b>{record.address.state}</b></div>
		<div className="Card__text">ZIP code: <b>{record.address.zip}</b></div>
	</div>
);

export default Card;