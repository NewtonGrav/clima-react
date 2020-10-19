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

					<div className='columns'>
						<div className='column'>
							<div className='is-flex is-justify-content-center	is-align-items-center	'>
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

							<p className='is-flex is-justify-content-center is-size-5 has-text-weight-bold'>
								<span className='mr-2'>ST: </span>
								{kelvinToCelsius(main?.feels_like)}
								{celsiusLogo()}
							</p>
						</div>

						<div className='column'>
							<div className='is-flex is-justify-content-space-between is-size-5'>
								<p className='is-flex my-0'>
									<i className='material-icons is-align-self-center'>arrow_drop_down</i>
									{kelvinToCelsius(main?.temp_min)} {celsiusLogo()}
								</p>

								<p className='is-flex'>
									<i className='material-icons is-align-self-center'>arrow_drop_up</i>
									{kelvinToCelsius(main?.temp_max)} {celsiusLogo()}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clima;
