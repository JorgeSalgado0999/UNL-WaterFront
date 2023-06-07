import React from "react";

interface Props {
	color: string;
	size: string;
	rotate: string;
}

export const IconMail = (props: Props) => {
	return (
		<svg
			style={{
				width: `${props.size}`,
				height: `${props.size}`,
				transform: `rotate(${props.rotate} deg)`,
			}}
			viewBox="0 0 57 47"
			fill="none"
		>
			<path
				d="M2.753 3.087c.962-.982 2.092-1.46 3.432-1.46h44.848c1.34 0 2.471.478 3.434 1.46.962.98 1.435 2.14 1.435 3.52v34.3c0 1.38-.473 2.54-1.434 3.522-.963.98-2.095 1.457-3.435 1.457H6.185c-1.34 0-2.47-.477-3.432-1.457-.963-.982-1.437-2.143-1.437-3.522v-34.3c0-1.38.474-2.54 1.437-3.52zM28.609 25.74 6.922 11.92V7.95l21.29 13.57.397.252.396-.253L51.43 7.228l2.133-1.36H5.447v35.776h46.324V10.978l-1.134.723-22.028 14.04z"
				fill={props.color}
				stroke={props.color}
				strokeWidth="1.475"
			/>
		</svg>
	);
};
