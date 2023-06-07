import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconEye = (props: Props) => {
	return (
		<svg
			style={{ width: `auto`, height: `${props.size}` }}
			viewBox="0 0 70 48"
			fill="none"
		>
			<path
				d="M34.833 14.25a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm0-14.25c15.834 0 29.355 9.848 34.834 23.75-5.479 13.902-19 23.75-34.834 23.75C19 47.5 5.478 37.652 0 23.75 5.478 9.848 19 0 34.833 0zM6.903 23.75a31.1 31.1 0 0 0 27.93 17.417 31.1 31.1 0 0 0 27.93-17.417 31.1 31.1 0 0 0-27.93-17.417A31.1 31.1 0 0 0 6.903 23.75z"
				fill={props.color}
			/>
		</svg>
	);
};
