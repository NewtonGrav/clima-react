import React, { useState } from 'react';

const Formulario = () => {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: '',
	});
	const { ciudad, pais } = busqueda;

	const [error, setError] = useState(false);

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

		//TODO Pasar a comp principal
	};

	return (
		<form onSubmit={handlerSubmit}>
			{error ? <p className='error red darken-3'>Todos los campos son obligatorios</p> : null}

			<div className='input-field s12'>
				<input
					type='text'
					name='ciudad'
					id='ciudad'
					value={ciudad}
					onChange={handlerChange}
				/>
				<label htmlFor='ciudad'>Ciudad</label>
			</div>

			<div className='input-field s12'>
				<select name='pais' id='pais' value={pais} onChange={handlerChange}>
					<option value='' disabled>
						-- Seleccionar un país --
					</option>
					<option value='US'>Estados Unidos</option>
					<option value='MX'>México</option>
					<option value='AR'>Argentina</option>
					<option value='CO'>Colombia</option>
					<option value='CR'>Costa Rica</option>
					<option value='ES'>España</option>
					<option value='PE'>Perú</option>
				</select>
				<label htmlFor='pais'>País</label>
			</div>

			<div className='input-field s12'>
				<input
					type='submit'
					value='Obtener Clima'
					className='waves-effect waves-light btn-large btn-block yellow accent-4 '
				></input>
			</div>
		</form>
	);
};

export default Formulario;
