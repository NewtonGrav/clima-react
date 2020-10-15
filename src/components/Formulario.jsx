import React, { useState } from 'react';

const Formulario = () => {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: '',
	});
	const { ciudad, pais } = busqueda;

	const handlerChange = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form>
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
		</form>
	);
};

export default Formulario;
