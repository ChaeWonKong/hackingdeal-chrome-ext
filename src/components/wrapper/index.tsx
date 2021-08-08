import React from "react";

import * as S from "./styled";

interface IProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: IProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
