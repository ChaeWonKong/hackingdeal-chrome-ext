import React from "react";
import * as S from "./styled";

interface IProps {
  children: React.ReactNode;
}
export default function TextFieldWrapper({ children }: IProps) {
  return <S.Form>{children}</S.Form>;
}
