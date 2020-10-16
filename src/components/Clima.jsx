import React from 'react';

const Clima = ({ resultado }) => {
	const { name, main } = resultado;

	if (!name) return null;

	const kelvinToCelsius = (kelvin) => {
		if (!kelvin) return null;

		const ABSOLUTE_ZERO = -273.15;

		return parseFloat(kelvin + ABSOLUTE_ZERO).toFixed(1);
	};

	return (
		<div className='card-panel white col s12'>
			<div className='black-text'>
				<h2>{name}</h2>
				<p className='temperatura'>
					{kelvinToCelsius(main?.temp)} <span>&#x2103;</span>
				</p>
				<p>
					<span>Máxima </span>
					{kelvinToCelsius(main?.temp_max)} <span>&#x2103;</span>
				</p>
				<p>
					<span>Mínima </span>
					{kelvinToCelsius(main?.temp_min)} <span>&#x2103;</span>
				</p>
			</div>
		</div>
	);
};

export default Clima;
