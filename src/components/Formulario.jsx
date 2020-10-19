import React, { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, setBusqueda, setHayConsulta }) => {
	const { ciudad, pais } = busqueda;

	const [error, setError] = useState(false);
	const [resultadoPaises, setResultadoPaises] = useState([]);

	useEffect(() => {
		const apiConsultarPaises = async () => {
			const urlPaises =
				'https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json';
			const promise = await fetch(urlPaises);
			const resultado = await promise.json();

			setResultadoPaises(resultado);
		};

		apiConsultarPaises();

		setBusqueda({...busqueda, pais: 'AR'})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlerChange = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		if (ciudad.trim() === '' || pais.trim() === '') {
			setError(true);
			return;
		}
		setError(false);

		setHayConsulta(true);
	};

	let listaPaises = resultadoPaises.map((p) => (
		<option value={p['FIPS']} key={p['Geoname ID']}>
			{p['CLDR display name']}
		</option>
	));

	return (
		<form onSubmit={handlerSubmit}>
			{error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

			<div className='field'>
				<label className='label has-text-white' htmlFor='ciudad'>
					Ciudad
				</label>
				<div className='control'>
					<input
						id='ciudad'
						className='input'
						type='text'
						placeholder='Ciudad'
						name='ciudad'
						value={ciudad}
						onChange={handlerChange}
					/>
				</div>
			</div>

			<div className='field'>
				<label className='label has-text-white' htmlFor='pais'>
					País
				</label>

				<div className='control has-icons-left'>
					<span className='select is-medium is-fullwidth'>
						<select
							name='pais'
							id='pais'
							className='is-full'
							value={pais}
							onChange={handlerChange}
						>
							{listaPaises}
						</select>
					</span>
					<span className='icon is-small is-left'>
						<i className='material-icons'>language</i>
					</span>
				</div>
			</div>

			<div className='control mt-6'>
				<button type='submit' className='button is-warning is-medium is-fullwidth'>
					Obtener Clima
				</button>
			</div>
		</form>
	);
};

export default Formulario;
