import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: '',
	});
	const { ciudad, pais } = busqueda;

	const [hayConsulta, setHayConsulta] = useState(false);

	useEffect(() => {
		console.log(ciudad);
	}, [hayConsulta])

	return (
		<Fragment>
			<Header titulo='Clima React App' />

			<div className='contenedor-form'>
				<div className='contenedor'>
					<div className='row'>
						<div className='col m6 s12'>
							<Formulario busqueda={busqueda} setBusqueda={setBusqueda} setHayConsulta={setHayConsulta} />
						</div>
						<div className='col m6 s12'>Resultado</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
