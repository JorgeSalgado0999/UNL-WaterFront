import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconCheck = (props: Props) => {
	return (
		<svg style={{width: `auto`, height: `${props.size}`}} viewBox="0 0 58 58">
			<g clipPath="url(#jdwi21mpva)">
				<path
					d="M31.03 34.945 47.415 18.56l-4.06-4.205L31.03 26.68l-6.235-6.09-4.06 4.06L31.03 34.945zM17.4 46.4c-1.595 0-2.96-.567-4.095-1.702C12.168 43.56 11.6 42.195 11.6 40.6V5.8c0-1.595.568-2.96 1.705-4.098C14.44.567 15.805 0 17.4 0h34.8c1.595 0 2.96.567 4.098 1.702C57.433 2.84 58 4.205 58 5.8v34.8c0 1.595-.567 2.96-1.702 4.098C55.16 45.833 53.795 46.4 52.2 46.4H17.4zm0-5.8h34.8V5.8H17.4v34.8zM5.8 58c-1.595 0-2.96-.567-4.095-1.702C.568 55.16 0 53.795 0 52.2V11.6h5.8v40.6h40.6V58H5.8z"
					fill="#141A26"
				/>
			</g>
			<defs>
				<clipPath>
					<path fill={props.color} d="M0 0h58v58H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};
