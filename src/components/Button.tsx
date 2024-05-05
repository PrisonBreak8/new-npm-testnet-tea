import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
	onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
	return (
		<button className="button-animation"
			onClick={onClick}
			style={{
				position: "relative",
				display: "inline-block",
				overflow: "hidden",
				padding: "20px 30px",
				fontSize: "1.2em",
				backgroundColor: " #393937",
				color: "#03e9f4",
				cursor: "pointer",
				border: "none",
				transition: "0.5s",
			}}
		>
			{children}
		</button>
	);
};

export { Button };