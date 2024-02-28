import { ChangeEvent, useState } from "react";
import { Input } from "src/components/styles/Field.styled";
import { InputProps } from "src/utils/types/types";

const SettingsInput = ({ count, handleChange }: InputProps) => {
  const [value, setValue] = useState(count);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const minute = Number(e.target.value);

    if (minute < 1) return;

    setValue(Number(e.target.value));
    handleChange(Number(e.target.value));
  };

  return <Input type="number" onChange={changeValue} value={value} />;
};

export default SettingsInput;
