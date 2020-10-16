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
			<div className='black-text center-align'>
				<h2 className=''>{name}</h2>

				<p className='temperatura light-blue-text text-darken-2'>
					{kelvinToCelsius(main?.temp)} <span>&#x2103;</span>
				</p>

				<p className='flex flex-center'>
					<i className='material-icons'>arrow_drop_up</i>
					{kelvinToCelsius(main?.temp_max)} <span>&#x2103;</span>
				</p>

				<p className='flex flex-center'>
					<i className='material-icons'>arrow_drop_down</i>
					{kelvinToCelsius(main?.temp_min)} <span>&#x2103;</span>
				</p>
			</div>
		</div>
	);
};

export default Clima;
