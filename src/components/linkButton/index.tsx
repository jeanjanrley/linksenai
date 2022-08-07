import React from "react";
import "./styles.scss";
import { IconType } from "react-icons";
import { BiCopy } from "react-icons/bi";
import Swal from "sweetalert2";

interface LinkButtonProps {
	Icon: IconType;
	href: string;
	text: string;
	password?: string;
	havePassword?: boolean;
}

export default function LinkButton({ Icon, href, text, password, havePassword }: LinkButtonProps) {
	return (
		<div className="link-button-box">
			<div
				className="first-button-box"
				onClick={() => {
					if (havePassword) {
						Swal.fire({
							title: "Digite a senha para acessar o grupo!",
							input: "password",
							showCancelButton: true,
							allowEnterKey: true,
							inputPlaceholder: "Senha do grupo",
							inputValidator: async (value) => {
								if (value === password) {
									Swal.fire("Acesso permitido!", "Você será redirecionado para o grupo!", "success");
									window.open(href, "_blank");
									return value;
								} else {
									return "Senha incorreta!";
								}
							}
						});
					} else {
						window.open(href, "_blank");
					}
				}}
			>
				<div className="icon-area">
					<Icon size={20} color="#fff" />
				</div>
				<div className="text-area">
					<p>{text}</p>
				</div>
			</div>

			<div className="copy-button"
				onClick={() => {
					try {
						navigator.clipboard.writeText(href);
						window.alert("Link copiado para a área de transferência!");
					} catch (error) {
						console.log(error);
					}
				}}
			>
				<BiCopy color="#fff" size={20} />
			</div>
		</div >
	);
}
