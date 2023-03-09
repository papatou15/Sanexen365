import 'normalize.css'
import './App.scss';
import client from './utils/Sanity';
import { useState } from 'react';
import Loading from './utils/Loading';

function App() {
	/**
	 * Formulaire sous forme de one-pager React.js 
	 * 
	 * Ce site web permet de remplir un formulaire qui va créer un ticket pour un problème dans Sanity.io.
	 * 
	 * */ 


	// Déclarations pour l'enregistrement des values

	const [nom, setNom] = useState("Pas de nom");
	const [adresse, setAdress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [breakProblem, setBreakProblem] = useState("");
	const [nowaterProblem, setNowaterProblem] = useState("");
	const [problemInfo, setProblemInfo] = useState("");
	const [problemChoisi, setProblemChoisi] = useState("break");

	const [isLoaded, setIsLoaded] = useState(false);


	/**
	 * 
	 * Fonction pour l'envoie de donnée
	 * 
	 * createTicket inscrit les données recueillies dans le formulaire dans un format de donnée JSON correspondant aux champs dans Sanity.io.
	 * Puis, client.create crée le document, envoie les données au serveur et retourne le document créé et alerte l'utilisateur de la réussite.
	 * 
	 * @param {string} nom 
	 * @param {string} adresse 
	 * @param {string} phone 
	 * @param {string} email 
	 * @param {string} breakProblem 
	 * @param {string} nowaterProblem 
	 * @param {string} problemInfo 
	 * @param {string} problemChoisi 
	 */
	function SendData(nom, adresse, phone, email, breakProblem, nowaterProblem, problemInfo, problemChoisi ){
		const createTicket = {
			_type: 'ticket',
			nom: nom,
			adress: adresse,
			phone: phone,
			email: email,
			issue: problemChoisi,
			issueBreakOptions: (breakProblem == "") ? "other" : breakProblem,
			issueNoWaterOptions: (nowaterProblem == "") ? "other" : nowaterProblem,
			description: problemInfo,
			status: 'new'
		}
		client.create(createTicket).then(response => console.log(response), alert("Formulaire reçu!"));
	}

	return (
		<div className="App">
			{
				(!isLoaded == false) ?
					<Loading isLoaded={isLoaded}/>
					:
					<div className='formWrapper'>
						<h1>Rapporter un problème</h1>

						<div className="ticketForm">
							<div className="leftSection ticketSection">
								<div className="ticketInfoSection">
									<h2>Nom et prénom</h2>
									<input type="text" name="clientName" id="clientName" className="clientInput" onChange={e => setNom(e.target.value)} />
								</div>

								<div className="ticketInfoSection">
									<h2>Adresse</h2>
									<input type="text" name="clientAdress" id="clientAdress" className="clientInput" onChange={e => setAdress(e.target.value)} />
								</div>

								<div className="ticketInfoSection">
									<h2>Numéro de téléphone</h2>
									<input type="text" name="clientPhone" id="clientPhone" className="clientInput" onChange={e => setPhone(e.target.value)}/>
								</div>

								<div className="ticketInfoSection">
									<h2>Email</h2>
									<input type="email" name="clientEmail" id="clientEmail" className="clientInput" onChange={e => setEmail(e.target.value)} />
								</div>
							</div>

							<div className="rightSection ticketSection">
								<div className="ticketInfoSection">
									<h2>Problème</h2>
									<select name="clientProblem" id="clientProblem" className='dropdownSelect' value={problemChoisi} onChange={e => setProblemChoisi(e.target.value)} >
										<option value="break">Fuite/Bris</option>
										<option value="nowater">Pas d'eau</option>
										<option value="signalisation">Signalisation</option>
										<option value="question">Question générale</option>
										<option value="complaint">Plainte</option>
										<option value="other">Autre</option>
									</select>
								</div>

								{
									(problemChoisi == 'break') ?
										<div className="ticketInfoSection">
											<h2>Précision du bris</h2>
											<select 
												name="breakProblem" 
												id="breakProblem" 
												className='dropdownSelect' 
												onChange={(problemChoisi == "break") ? e => setBreakProblem(e.target.value) : e => setBreakProblem("other")}
											>
												<option value="white">Blanc 1/2"</option>
												<option value="blue">Bleu 2" 1/2</option>
												<option value="yellow">Jaune 6"</option>
												<option value="excavation">Excavation</option>
												<option value="other">Autre</option>
											</select>
										</div>
										:
										<></>
								}

								{
									(problemChoisi == 'nowater') ?
										<div className="ticketInfoSection">
											<h2>Précision du problème</h2>
											<select 
												name="nowaterProblem" 
												id="nowaterProblem" 
												className='dropdownSelect'
												onChange={(problemChoisi == "nowater") ? e => setNowaterProblem(e.target.value) : setNowaterProblem("other")}
											>
												<option value="disconnected">Hose déconnectée</option>
												<option value="other">Autre</option>
											</select>
										</div>
										:
										<></>
								}

								<div className="ticketInfoSection">
									<h2>Description/Information utile</h2>
									<textarea name="problemInfo" id="problemInfo" cols="50" rows="10" onChange={e => setProblemInfo(e.target.value)}></textarea>
								</div>
							</div>
						</div>
						<button type="button" className='sendButton' onClick={() => SendData(nom, adresse, phone, email, breakProblem, nowaterProblem, problemInfo, problemChoisi)}>Envoyer</button>
					</div>
			}
		</div>
	);
}

export default App;
