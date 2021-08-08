import styled from "styled-components";

export const TextFieldWrapper = styled.section`
  width: 100%;
  margin: 16px 0;
`;

export const TextField = styled.input<{ validity: boolean }>`
  display: flex;
  width: 100%;
  border: none;
  border-bottom: ${({ validity }) =>
    validity ? "1px solid #bbb;" : "1px solid red;"};
  font-size: 16px;
  padding: 8px;
`;

export const TextFieldError = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`;
