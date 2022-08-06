import React from "react";
import "styles.scss";

interface LinkButtonProps {
	icon: string;
	href: string;
	text: string;
	backgroundColor: string;
}

export default function LinkButton({ icon, href, text, backgroundColor }: LinkButtonProps) {
	return (
		<div className="link-button-box">
			<div className="icon-area">
				
			</div>
			<div className="text-area">
				<p>{text}</p>
			</div>
		</div>
	);
}
