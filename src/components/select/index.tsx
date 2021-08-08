import React from "react";
import * as S from "./styled";

interface IProps {
  selectOptions: SelectOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export interface SelectOption {
  value?: string;
  text: string;
}

export default function Select({ selectOptions, onChange }: IProps) {
  const renderOptions = () =>
    selectOptions.map(({ value, text }) => (
      <option key={`key-${text}`} value={value || text}>
        {text}
      </option>
    ));
  return <S.Select onChange={onChange}>{renderOptions()}</S.Select>;
}
