import React from "react";

interface Props {
	color: string;
	size: number;
}

export const IconBed = (props: Props) => {
	return (
		<svg width={props.size} height={props.size} viewBox="0 0 69 40" fill="none">
			<path
				d="M18.9 20c4.737 0 8.591-3.738 8.591-8.333 0-4.595-3.854-8.334-8.59-8.334-4.738 0-8.592 3.739-8.592 8.334S14.163 20 18.9 20zM56.7 6.667H32.647c-.95 0-1.718.745-1.718 1.666v15H6.873V1.667C6.873.746 6.103 0 5.155 0H1.718C.768 0 0 .746 0 1.667v36.666C0 39.254.769 40 1.718 40h3.437c.949 0 1.718-.746 1.718-1.667v-5h54.982v5c0 .921.77 1.667 1.718 1.667h3.437c.95 0 1.718-.746 1.718-1.667v-20c0-6.443-5.384-11.666-12.027-11.666z"
				fill={props.color}
			/>
		</svg>
	);
};
