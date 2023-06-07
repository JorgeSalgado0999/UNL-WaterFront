import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconAdd = (props: Props) => {
	return (
		<svg
			style={{
				height: `${props.size}`,
				width: `auto`,
			}}
			viewBox="0 0 50 48"
			fill="none"
		>
			<path
				d="M27.64 25.342h-.737v9.441H23.51v-9.441h-9.737v-3.246h9.737v-9.442h3.393v9.442h9.737v3.246h-9zm-11.642 19.44c-2.881-1.204-5.379-2.836-7.5-4.892-2.121-2.057-3.802-4.477-5.042-7.265-1.235-2.774-1.854-5.74-1.854-8.906 0-3.166.62-6.132 1.854-8.906 1.24-2.789 2.92-5.208 5.042-7.265 2.121-2.057 4.619-3.69 7.5-4.896 2.867-1.198 5.934-1.8 9.208-1.8 3.275 0 6.342.602 9.209 1.8 2.881 1.207 5.379 2.84 7.5 4.896 2.121 2.057 3.802 4.476 5.041 7.265 1.236 2.774 1.855 5.74 1.855 8.906 0 3.166-.62 6.132-1.854 8.905-1.24 2.79-2.92 5.209-5.042 7.265-2.121 2.057-4.619 3.69-7.5 4.894-2.867 1.2-5.934 1.803-9.209 1.803-3.274 0-6.341-.603-9.208-1.803zm9.208-1.442c5.621 0 10.412-1.899 14.328-5.696 3.917-3.798 5.884-8.455 5.884-13.925 0-5.47-1.967-10.127-5.884-13.925-3.916-3.798-8.707-5.696-14.328-5.696-5.62 0-10.411 1.899-14.327 5.696-3.917 3.798-5.884 8.454-5.884 13.925 0 5.47 1.967 10.127 5.884 13.925 3.916 3.797 8.707 5.696 14.327 5.696z"
				fill={props.color}
				stroke={props.color}
				strokeWidth="0.5"
			/>
		</svg>
	);
};