import 'normalize.css'
import './App.scss';
import client from './utils/Sanity';
import { useState } from 'react';
import useFetchData from './utils/useFetchData';
import Loading from './utils/Loading';

function App() {

	// Déclaration pour l'enregistrement des values

	const [nom, setNom] = useState("Pas de nom");
	const [adresse, setAdress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [breakProblem, setBreakProblem] = useState("");
	const [nowaterProblem, setNowaterProblem] = useState("");
	const [problemInfo, setProblemInfo] = useState("");
	const [problemChoisi, setProblemChoisi] = useState("break");

	const [isLoaded, setIsLoaded] = useState(false);

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
		console.log("CreateTicket: ", createTicket)
		client.create(createTicket).then(response => console.log(response));
	}

	// const [appData, setAppData] = useState({
	// 	ticket: []
	// });

	// useFetchData(setAppData, isLoaded, setIsLoaded);

	// const data = appData.ticket;

	// console.log(data);

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
			{console.log(
				"Nom: " + nom + 
				" Adresse: " + adresse + 
				" Phone: " + phone + 
				" Email: " + email + 
				" BreakProblems: " + breakProblem + 
				" ProblemeChoisi: " + problemChoisi + 
				" BreakProblem: " + breakProblem +
				" NowaterProblem: " + nowaterProblem + 
				" ProblemInfo: " + problemInfo
			)}
		</div>
	);
}

export default App;
