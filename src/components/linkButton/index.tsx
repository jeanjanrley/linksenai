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
	type?: "link" | "download";
	showSwal?: boolean;
}

export default function LinkButton({ Icon, href, text, password, havePassword, type = "link" }: LinkButtonProps) {

	interface RedirectPageType {
		callback?: any;
	}

	const passwordVerify = ({ callback }: RedirectPageType) => {
		if (havePassword) {
			Swal.fire({
				title: "Digite a senha para acessar essa funcionalidade",
				input: "password",
				showCancelButton: true,
				allowEnterKey: true,
				inputPlaceholder: "Senha do grupo",
				inputValidator: async (value) => {
					if (value === password) {
						callback?.();
						return value;
					} else {
						Swal.fire("Senha incorreta!", "", "error");
						return "Senha incorreta!";
					}
				}
			});
		} else {
			callback?.();
		}
	};

	interface CallbackTypes {
		title: string;
		message?: string;
	}

	function defineLink() {
		const downloadUrl = import.meta.env.DEV ? href : `${import.meta.env.VERCEL_URL}${href}`;
		const result = type === "download" ? downloadUrl : href;
		return result;
	}

	const copyLink = ({ title, message }: CallbackTypes) => {
		try {

			const text = defineLink();
			navigator.clipboard.writeText(text);
			Swal.fire(title, message, "success");
		}
		catch (error) {
			console.log(error);
			Swal.fire("Erro", "houve um erro ao copiar o texto", "error");
		}
	};

	const redirectPage = ({ title, message }: CallbackTypes) => {
		try {
			window.open(href, "_blank");
			Swal.fire(title, message, "success");
		}
		catch (error) {
			console.log(error);
			Swal.fire("Erro", "houve um erro ao te direcionar para o link!", "error");
		}
	};

	return (
		<div className="link-button-box">
			<div
				className="first-button-box"
				onClick={() => {
					passwordVerify({
						callback: () => redirectPage({
							title: type === "link" ? "Você será redirecionado!" : "Download efetuado com sucesso!",
						})
					});
				}}
			>
				<div className="icon-area">
					<Icon size={20} color="#232937" />
				</div>
				<div className="text-area">
					<p>{text}</p>
				</div>
			</div>

			<div className="copy-button"
				onClick={() => {
					passwordVerify({
						callback: () => copyLink({
							title: "Texto copiado com sucesso!",
						})
					});
				}}
			>
				<BiCopy color="#fff" size={20} />
			</div>
		</div >
	);
}
