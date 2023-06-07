import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconMarketing = (props: Props) => {
	return (
		<svg
			style={{width: `auto`, height: `${props.size}`}}
			viewBox="0 0 39 38"
			fill="none"
		>
			<path
				d="M3.833 33.778v.5h31.334V3.722H3.833v30.056zM12.5 19.5v9.556H9.167V19.5H12.5zM29.833 8.944v20.112H26.5V8.944h3.333zm-8.666 14.778v5.334h-3.334v-5.334h3.334zm0-8.444V18.5h-3.334v-3.222h3.334zM4.333 37.5c-1.062 0-1.957-.363-2.712-1.097C.867 35.667.5 34.8.5 33.778V4.222c0-1.023.367-1.89 1.12-2.625C2.377.863 3.272.5 4.334.5h30.334c1.062 0 1.957.363 2.712 1.098.754.735 1.121 1.601 1.121 2.624v29.556c0 1.023-.367 1.889-1.12 2.625-.756.734-1.651 1.097-2.713 1.097H4.333z"
				fill={props.color}
				stroke={props.color}
			/>
		</svg>
	);
};
