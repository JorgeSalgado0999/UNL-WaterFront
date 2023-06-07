import React from "react";

interface Props {
	color: string;
	size: string;
	rotate: string;
}

export const IconArrow = (props: Props) => {
	return (
		<svg
			style={{
				width: `${props.size}`,
				height: `${props.size}`,
				transform: `rotate(${props.rotate}deg)`,
			}}
			viewBox="0 0 18 32"
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M.586 31.414a2 2 0 0 1 0-2.828L13.172 16 .586 3.414A2 2 0 1 1 3.414.586l13.293 13.293a3 3 0 0 1 0 4.242L3.414 31.414a2 2 0 0 1-2.828 0z"
				fill={props.color}
			/>
		</svg>
	);
};
