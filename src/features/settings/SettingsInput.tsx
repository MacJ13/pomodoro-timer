import { ChangeEvent, useState } from "react";
import { Input } from "src/components/styles/Field.styled";

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

export default SettingsInput;
