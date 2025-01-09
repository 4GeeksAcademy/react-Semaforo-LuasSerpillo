import React from "react";
import { useState } from "react";


const Home = () => {
	const [light, setlight] = useState('');

	const RedOn = () => setlight('red');
	const YellowOn = () => setlight('yellow');
	const GreenOn = () => setlight('green');

	return (
		<div className="container mt-5 text-center">
			<div className="semaforo">

				<div
					className={`light red ${light === 'red' ? 'encendido' : ''}`}
					onClick={RedOn}
				></div>


				<div
					className={`light yellow ${light === 'yellow' ? 'encendido' : ''}`}
					onClick={YellowOn}
				></div>


				<div
					className={`light green ${light === 'green' ? 'encendido' : ''}`}
					onClick={GreenOn}
				></div>
			</div>
		</div>
	);
};

export default Home;
