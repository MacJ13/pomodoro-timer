import { ChangeEvent, useState } from "react";
import styled from "styled-components";

type InputProps = {
  count: number;
  onChange: (value: number) => void;
};

const SettingsInput = ({ count, onChange }: InputProps) => {
  const [value, setValue] = useState(count);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const minute = Number(e.target.value);

    if (minute < 1) return;

    setValue(Number(e.target.value));
    onChange(Number(e.target.value));
  };

  return <Input type="number" onChange={changeValue} value={value} />;
};

const Input = styled.input`
  // border: none;
  height: 2rem;
  // text-align: right;
  padding-left: 0.75rem;
  width: 4.5rem;
  background-color: rgb(241, 241, 241);
  border: none;
  border-radius: 0.33rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;

  &::-webkit-inner-spin-button {
    margin-right: 0.5rem;
    background-color: white;
  }
`;

export default SettingsInput;
