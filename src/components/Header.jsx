import React from 'react';

const Header = ({ titulo }) => {
	return (
		<section className='hero is-link is-bold'>
			<div className='hero-body'>
				<div className='container'>
					<h1 className='title has-text-centered'>{titulo}</h1>
				</div>
			</div>
		</section>
	);
};

export default Header;
