import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: '',
	});
	const { ciudad, pais } = busqueda;

	const [hayConsulta, setHayConsulta] = useState(false);
	const [resultado, setResultado] = useState({});

	useEffect(() => {
		const consultarApi = async () => {
			if (hayConsulta) {
				const appId = 'b32cc12a700aa61694e20c350de3703f';
				const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

				const promise = await fetch(url);
				const response = await promise.json();
				setResultado(response);
			}
		};

		consultarApi();
		setHayConsulta(false);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hayConsulta]);

	return (
		<Fragment>
			<Header titulo='Clima React App' />

			<div className='contenedor-form'>
				<div className='container'>
					<div className='row'>
						<div className='col m6 s12'>
							<Formulario
								busqueda={busqueda}
								setBusqueda={setBusqueda}
								setHayConsulta={setHayConsulta}
							/>
						</div>
						<div className='col m6 s12'>
							<Clima resultado={resultado} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
