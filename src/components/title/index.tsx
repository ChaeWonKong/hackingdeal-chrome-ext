import React from "react";
import * as S from "./styled";

interface IProps {
  children: string;
}

export default function Title({ children }: IProps) {
  return (
    <S.Wrapper>
      <S.Image src="icons/icon32.png" />
      <S.Title>{children}</S.Title>
    </S.Wrapper>
  );
}
