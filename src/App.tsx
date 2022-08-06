import "./App.scss";
import LinkButton from "./components/linkButton";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
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
						Icon={IoLogoWhatsapp}
						text="Portal do Aluno"
						href=""
					/>
					<LinkButton
						Icon={IoLogoWhatsapp}
						text="Classroom"
						href=""
					/>
					<LinkButton
						Icon={IoLogoWhatsapp}
						text="Grupo da Turma"
						href=""
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
