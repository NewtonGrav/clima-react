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
		<div className='card'>
			<div className='card-content'>
				<div className='content has-black-text has-text-centered'>
					<h1 className='title'>{name}</h1>

					<h2 className='has-text-link is-size-1 has-text-weight-bold		'>
						{kelvinToCelsius(main?.temp)} <span>°C</span>
					</h2>

					<div className='is-size-4	'>
						<p className='flex flex-center'>
							<i className='material-icons'>arrow_drop_up</i>
							{kelvinToCelsius(main?.temp_max)} <span>°C</span>
						</p>

						<p className='flex flex-center'>
							<i className='material-icons'>arrow_drop_down</i>
							{kelvinToCelsius(main?.temp_min)} <span>°C</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clima;
