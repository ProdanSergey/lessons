import styled from "styled-components";

export const StyledItem = styled.li`
	display: flex;
	flex-direction: column;
	padding: 12px;
	border: 1px solid lightgray;
	border-radius: 6px;
	background-color: #f0eeee;
	margin-bottom: 8px;
`;

export const StyledProduct = styled.figure`
	display: flex;

	img {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
	}
`;

export const StyledBreakdown = styled.figcaption`
	flex: 1;
	padding: 0 8px;
`;

export const StyledCTA = styled.button`
	padding: 6px;
	border-radius: 6px;
	border: 1px solid lightgray;
	background-color: #91dd91;
	cursor: pointer;
	margin-left: auto;
	text-transform: uppercase;
	font-size: 14px;
`;
