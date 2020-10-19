import React from 'react';

const Error = ({ mensaje }) => {
	return (
		<div className='message is-danger'>
			<div className='message-header'>
				<p>Error</p>
			</div>
			<div className='message-body'>{mensaje}</div>
		</div>
	);
};

export default Error;
