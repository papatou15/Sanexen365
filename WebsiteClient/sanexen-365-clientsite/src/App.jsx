import 'normalize.css'
import './App.scss';
import client from './utils/Sanity';
import { useState } from 'react';
import useFetchData from './utils/useFetchData';

function App() {

	const [chantierChoisi, setChantierChoisi] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

	const [appData, setAppData] = useState({
		ticket: []
	});

	useFetchData(setAppData, isLoaded, setIsLoaded);

	const data = appData.ticket;

	console.log(data);

	return (
		<div className="App">
			{
				(isLoaded == false) ?
				<h1>Loading...</h1>
				:
				<div className='formWrapper'>
					<h1>Rapporter un problème</h1>

					<div className="ticketForm">

						<div className="ticketInfoSection">
							<h2>Nom et prénom</h2>
							<input type="text" name="clientName" id="clientName" className="clientInput"/>
						</div>

						<div className="ticketInfoSection">
							<h2>Adresse</h2>
							<input type="text" name="clientAdress" id="clientAdress" className="clientInput" />
						</div>
						
						<div className="ticketInfoSection">
							<h2>Numéro de téléphone</h2>
							<input type="text" name="clientPhone" id="clientPhone" className="clientInput" />
						</div>

						<div className="ticketInfoSection">
							<h2>Email</h2>
							<input type="email" name="clientEmail" id="clientEmail" className="clientInput"/>
						</div>

						<div className="ticketInfoSection">
							<h2>Problème</h2>
							<select name="clientProblem" id="clientProblem" placeholder='Choisir...'>
								<option value="white">Blanc</option>
							</select>
						</div>

						<div className="ticketInfoSection">
							<h2>Précision du bris</h2>
							<select name="breakProblem" id="breakProblem" placeholder='Choisir...'>
								<option value="white">Blanc</option>
							</select>
						</div>

						<div className="ticketInfoSection">
							<h2>Description/Information utile</h2>
							<textarea name="problemInfo" id="problemInfo" cols="50" rows="10"></textarea>
						</div>

						<button type="button" className='sendButton'>Envoyer</button>
					</div>

				</div>
			}
			
		</div>
	);
}

export default App;
