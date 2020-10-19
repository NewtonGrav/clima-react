import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, setBusqueda, setHayConsulta }) => {
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

		setHayConsulta(true);
	};

	return (
		<form onSubmit={handlerSubmit}>
			{error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

			<div class='field'>
				<label class='label has-text-white' htmlFor='ciudad'>
					Ciudad
				</label>
				<div class='control'>
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
				<button
					type='submit'
					className='waves-effect waves-light btn-large btn-block yellow accent-4 black-text'
				>
					Obtener Clima
				</button>
			</div>
		</form>
	);
};

export default Formulario;
