import styled, { css } from "styled-components";

export const ButtonCSS = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	cursor: pointer;
`;

export const Button = styled.button`
	${ButtonCSS}
	border: none;
	background: transparent;
`;
