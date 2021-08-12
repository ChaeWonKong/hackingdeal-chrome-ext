import React from "react";
import * as S from "./styled";

interface IProps {
  children: number;
}

export default function FinalPrice({ children }: IProps) {
  return (
    <S.Wrapper>
      <S.TextLabel>총액</S.TextLabel>
      <S.FinalPrice>{`${children} 달러`}</S.FinalPrice>
    </S.Wrapper>
  );
}
