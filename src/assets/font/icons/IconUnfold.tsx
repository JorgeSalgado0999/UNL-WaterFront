import React from "react";

interface Props {
	color: string;
	size: string;
	rotate: string;
}

export const IconUnfold = (props: Props) => {
	return (
		<svg
			style={{
				width: `${props.size}`,
				height: `${props.size}`,
				transform: `rotate(${props.rotate} deg)`,
			}}
			viewBox="0 0 28 56"
			fill="none"
		>
			<path
				d="M14 56 0 41.922l4.511-4.536L14 46.927l9.489-9.541L28 41.922 14 56zM4.511 18.614 0 14.079 14 0l14 14.078-4.511 4.537L14 9.072l-9.489 9.541z"
				fill={props.color}
			/>
		</svg>
	);
};
