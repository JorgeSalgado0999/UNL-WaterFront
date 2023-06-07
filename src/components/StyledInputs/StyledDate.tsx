import styled, {css} from "styled-components";

interface PropType {
	customType: string;
}
export const StyledInputDate = styled.input.attrs<PropType>({
	type: "date",
})`
	min-height: 3rem;
	text-align: center;
	border: none;
	background-color: ${(props: PropType) =>
		props.customType === "primary" ? "var(--background)" : "var(--white)"};
	padding: 1rem 0.5rem;
	border-radius: var(--br-1);
	border-bottom: ${(props: PropType) =>
		props.customType === "primary" ? "none" : "1px solid var(--gray2)"};
	font-size: var(--p);
	text-align: left;
	color: var(--text);
	cursor: pointer;
	margin-bottom: 1.9rem;

	&:focus {
		outline: 3px solid #3fa9f5;
	}
`;
