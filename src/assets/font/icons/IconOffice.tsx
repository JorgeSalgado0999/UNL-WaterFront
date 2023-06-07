import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconOffice = (props: Props) => {
	return (
		<svg
			style={{ width: `auto`, height: `${props.size}` }}
			viewBox="0 0 46 59"
			fill="none"
		>
			<path
				d="M0 59V0h46v59H26.286V45.889h-6.572V59H0zm6.571-6.556h6.572v-13.11h19.714v13.11h6.572V6.556H6.57v45.888zm6.572-19.666h6.571v-6.556h-6.571v6.556zm0-13.111h6.571V13.11h-6.571v6.556zm13.143 13.11h6.571v-6.555h-6.571v6.556zm0-13.11h6.571V13.11h-6.571v6.556z"
				fill={props.color}
			/>
		</svg>
	);
};
