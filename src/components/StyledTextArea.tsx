import styled, {css} from "styled-components";

export const StyledTextArea = styled.textarea`
	height: 3rem;
	width: 100%;
	min-width: 30rem;
	border-bottom: 1px solid var(--gray2);
	font-size: var(--p2);
	background-color: var(--white);
	border-radius: var(--br-1);
	padding: 0.3em 0.5em;
	margin-bottom: 1.9rem;
	color: #000;
	font-size: var(--p);
	transition: all 0.5s;
	resize: none;
	&:focus {
		outline: 2px solid #3fa9f5;
		height: 11rem;
	}
`;