import styled from "styled-components";

export const TextField = styled.input<{ validity: boolean }>`
  display: flex;
  flex: 1;
  border: none;
  border-bottom: ${({ validity }) =>
    validity ? "1px solid #bbb;" : "1px solid red;"};
  font-size: 16px;
  margin: 16px 24px 8px;
  padding: 8px;
`;

export const TextFieldError = styled.p`
  font-size: 12px;
  color: red;
  margin: 0 24px 16px;
`;
