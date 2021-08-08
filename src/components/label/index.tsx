import React from "react";
import * as S from "./styled";

interface IProps {
  children: React.ReactNode;
}

export default function Label({ children }: IProps) {
  return <S.Label>{children}</S.Label>;
}
