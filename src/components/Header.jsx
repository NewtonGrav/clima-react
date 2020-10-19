import React from 'react';

const Header = ({ titulo }) => {
	return (
		<header className='hero is-dark is-bold'>
			<div className='hero-body'>
				<div className='container'>
					<h1 className='title has-text-centered is-size-2'>{titulo}</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
