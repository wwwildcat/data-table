import React from 'react';
import './FlexContainer.css';

const FlexContainer = ({ children, type }) => (
	<div className={`Flex-container Flex-container_type_${type}`}>
		{children}
	</div>
);

export default FlexContainer;