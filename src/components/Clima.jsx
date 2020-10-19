import React from 'react';

const Clima = ({ resultado }) => {
	const { name, main } = resultado;

	if (!name) return null;

	const kelvinToCelsius = (kelvin) => {
		if (!kelvin) return null;

		const ABSOLUTE_ZERO = -273.15;

		return parseFloat(kelvin + ABSOLUTE_ZERO).toFixed(1);
	};

	const celsiusLogo = () => (
		<span className='ml-2 is-size-6 is-align-self-flex-start'>°C</span>
	);

	return (
		<div className='card'>
			<div className='card-content'>
				<div className='content has-black-text has-text-centered'>
					<h1 className='title'>{name}</h1>

					<div className='is-flex is-justify-content-center	is-align-items-center	mb-4'>
						<img
							src={`http://openweathermap.org/img/wn/${resultado.weather[0].icon}@2x.png`}
							alt='Icon weather'
							className=''
						/>

						<h2 className='is-flex has-text-link is-size-1 has-text-weight-bold	my-0'>
							<span>{kelvinToCelsius(main?.temp)}</span>
							{celsiusLogo()}
						</h2>
					</div>

					<div className='columns is-size-5'>
						<div className='is-flex column is-justify-content-center'>
							<p className='is-flex my-0 has-text-weight-bold'>
								<span className=''>Sensación Térmica: </span>
								{kelvinToCelsius(main?.feels_like)}
								{celsiusLogo()}
							</p>
						</div>

						<div className='is-flex column is-justify-content-center'>
							<p className='is-flex my-0 mr-4'>
								<i className='material-icons is-align-self-center'>arrow_drop_down</i>
								{kelvinToCelsius(main?.temp_min)}
								{celsiusLogo()}
							</p>
							<p className='is-flex'>
								<i className='material-icons is-align-self-center'>arrow_drop_up</i>
								{kelvinToCelsius(main?.temp_max)}
								{celsiusLogo()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clima;
