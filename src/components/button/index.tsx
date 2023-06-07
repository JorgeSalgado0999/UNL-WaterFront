import React from "react";
import styles from "./Button.module.css";

interface Props {
	text: string;
	func: any;
	full: boolean;
}

export const Button = (props: Props) => {
	return (
		<button
			className={props.full ? styles.fullButton : styles.button}
			onClick={() => props.func()}
		>
			{props.text}
		</button>
	);
};
