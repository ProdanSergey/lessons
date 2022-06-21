import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const StyledLabel = styled.label`
	font-weight: bold;
	margin-bottom: 4px;
`;

export const StyledField = styled.div`
	margin-bottom: 6px;
`;

export const StyledInput = styled.input`
	padding: 6px;
	width: 100%;
`;

export const StyledError = styled.span.attrs(() => ({ role: "alert"}))`
	font-size: 14px;
	margin-top: 4px 0;
	color: tomato;
`;