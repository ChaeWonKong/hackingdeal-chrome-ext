import React from "react";
import * as S from "./styled";

interface IProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: IProps) {
  return <S.ButtonBox onClick={props.onClick}>{props.children}</S.ButtonBox>;
}
