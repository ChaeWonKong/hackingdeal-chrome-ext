import React from "react";
import * as S from "./styled";

interface IProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  validity: boolean;
  errorMessage?: string;
}

export default function TextField({
  onChange,
  validity,
  errorMessage,
}: IProps) {
  return (
    <S.TextFieldWrapper>
      <S.TextField onChange={onChange} validity={validity} />
      {!validity && <S.TextFieldError>{errorMessage}</S.TextFieldError>}
    </S.TextFieldWrapper>
  );
}
