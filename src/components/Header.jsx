import React from 'react';

const Header = ({ titulo }) => {
	return (
		<section class='hero is-link is-bold'>
			<div class='hero-body'>
				<div class='container'>
					<h1 class='title has-text-centered'>{titulo}</h1>
				</div>
			</div>
		</section>
	);
};

export default Header;
