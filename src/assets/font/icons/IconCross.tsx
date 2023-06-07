import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconCross = (props: Props) => {
	return (
		<svg
			style={{width: `auto`, height: `${props.size}`}}
			viewBox="0 0 35 35"
			fill="none"
		>
			<path fill={props.color} d="m34.33 29.342-4.988 4.988L0 4.988 4.988 0z" />
			<path fill={props.color} d="m29.343.67 4.988 4.988L4.988 35 0 30.013z" />
		</svg>
	);
};
