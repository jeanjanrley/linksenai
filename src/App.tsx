import "./App.scss";
import LinkButton from "./components/linkButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiHouse } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import LogomarcaCowmiBranca from "./assets/images/Logomarca Cowimi - Branca.png";


function App() {
	const password = import.meta.env.PROD ? process.env.VITE_GROUP_PASSWORD : import.meta.env.VITE_GROUP_PASSWORD;
	const url = import.meta.env.PROD ? process.env.VITE_GROUP_URL : import.meta.env.VITE_GROUP_URL;

	return (
		<div className="App">
			<div className="header-container">
				<div className="header-box-title">
					<h1 className="title">Tec. Dev. de Sistemas Noturno - Senai 2022.2</h1>
				</div>
			</div>
			<div className="content-container">
				<div className="content-area">
					<LinkButton
						Icon={GiHouse}
						text="Portal do Aluno"
						href="https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/"
					/>
					<LinkButton
						Icon={CgWebsite}
						text="Classroom"
						href="https://classroom.google.com/u"
					/>
					<LinkButton
						havePassword={true}
						Icon={IoLogoWhatsapp}
						text="Grupo da Turma"
						password={password}
						href={url}
					/>
				</div>
				<div className="warn-area">
					<div className="warn-box">
						<p className="warn-text">
							Estes são alguns links importantes para a turma, como o portal do aluno,
							o classroom e o grupo da turma no Whatsapp. Para sugerir ideias ou reportar algum erro,
							sinta-se a vontade para comunicar no grupo.
						</p>
					</div>
				</div>
				<footer>
					<img src={LogomarcaCowmiBranca} alt="Logormarca Cowimi - Branca" />
				</footer>
			</div>
		</div>
	);
}

export default App;
