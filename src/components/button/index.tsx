import React from "react";
import * as S from "./styled";

interface IProps {
  children: string;
  onClick?: () => void;
}

export default function Button(props: IProps) {
  return <S.ButtonBox onClick={() => {}}>{props.children}</S.ButtonBox>;
}
