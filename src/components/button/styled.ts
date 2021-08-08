import styled from "styled-components";

export const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  padding: 16px 24px;
  border-radius: 8px;
  width: auto;
  font-size: 16px;
  color: #3a3a3a;
  font-weight: 400;
  background: #fff;
  box-shadow: 5px 5px 10px #bbb, -5px -5px 10px #eee;
  transition: 0.5s ease;

  :hover {
    background: #fafafa;
    box-shadow: 5px 5px 10px #ababab, -5px -5px 10px #ccc;
    transition: 0.5s ease;
  }
  :active {
    background: #ccc;
    box-shadow: 5px 5px 10px #ababab, -5px -5px 10px #ccc;
  }
`;
