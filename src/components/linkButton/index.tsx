import React from "react";
import "./styles.scss";
import { IconType } from "react-icons";
import { BiCopy } from "react-icons/bi";

interface LinkButtonProps {
	Icon: IconType;
	href: string;
	text: string;
	color: string;
}

export default function LinkButton({ Icon, href, text, color }: LinkButtonProps) {
	return (
		<div className="link-button-box">
			<div className="first-button-box">
				<div className="icon-area">
					<Icon size={18} color="#fff" />
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
				<BiCopy color="#fff" size={18} />
			</div>
		</div>
	);
}
