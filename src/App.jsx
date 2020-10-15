import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: '',
	});
	const { ciudad, pais } = busqueda;

	useEffect(() => {
		console.log(ciudad);
	}, [ciudad, pais])

	return (
		<Fragment>
			<Header titulo='Clima React App' />

			<div className='contenedor-form'>
				<div className='contenedor'>
					<div className='row'>
						<div className='col m6 s12'>
							<Formulario busqueda={busqueda} setBusqueda={setBusqueda} />
						</div>
						<div className='col m6 s12'>Resultado</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
