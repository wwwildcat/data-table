import React from 'react';
import './Card.css';

const Card = ({ record }) => (
	<div className="Card" data-testid="card">
		<div className="Card__text">Выбран пользователь <b>{`${record.firstName} ${record.lastName}`}</b></div>
		<div className="Card__text">Описание:</div>
		<textarea readOnly className="Card__textarea" value={record.description}></textarea>
		<div className="Card__text">Адрес проживания: <b>{record.address.streetAddress}</b></div>
		<div className="Card__text">Город: <b>{record.address.city}</b></div>
		<div className="Card__text">Провинция/штат: <b>{record.address.state}</b></div>
		<div className="Card__text">Индекс: <b>{record.address.zip}</b></div>
	</div>
);

export default Card;