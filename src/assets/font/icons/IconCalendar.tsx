import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconCalendar = (props: Props) => {
	return (
		<svg
			style={{ width: `auto`, height: `${props.size}` }}
			viewBox="0 0 55 61"
			fill="none"
		>
			<path
				d="M9.419 6.786h.737V.738h4.59v6.048h25.736V.738h4.59v6.048h3.77c1.47 0 2.712.515 3.764 1.563 1.049 1.047 1.563 2.283 1.563 3.748v42.341c0 1.465-.514 2.702-1.563 3.75-1.051 1.047-2.293 1.561-3.764 1.561H6.386c-1.471 0-2.712-.513-3.764-1.56-1.049-1.048-1.563-2.285-1.563-3.751v-42.34c0-1.466.514-2.702 1.563-3.749 1.052-1.048 2.293-1.563 3.764-1.563H9.42zm-3.77 47.652v.738H49.579V23.457H5.65V54.438zm0-36.292v.738H49.579V11.36H5.65V18.146z"
				fill={props.color}
				stroke={props.color}
				strokeWidth="1.475"
			/>
		</svg>
	);
};
