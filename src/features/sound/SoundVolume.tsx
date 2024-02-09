// import { useState } from "react";
import styled from "styled-components";
import { SoundItem } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeVolume, playSound, selectSound } from "src/redux/soundSlice";

const SoundVolume = () => {
  const { playing, volume } = useSelector(selectSound);

  const dispatch = useDispatch();

  // const [value, setValue] = useState(volume);

  const updateClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // setValue(Number(e.target.value));
    dispatch(changeVolume(Number((e.target as HTMLInputElement).value)));

    if (!playing) dispatch(playSound());
  };
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(Number(e.target.value));
    dispatch(changeVolume(Number(e.target.value)));

    if (!playing) dispatch(playSound());
  };

  return (
    <SoundItem>
      <label>{Math.floor(volume * 10)}</label>
      <Range
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onClick={updateClick}
        onInput={updateValue}
      />
    </SoundItem>
  );
};

const Range = styled.input`
  &[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 10rem;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    background: rgba(241, 241, 241);
    border: 1px solid rgba(235, 235, 235);
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  &[type="range"]::-moz-range-track {
    background: rgba(235, 235, 235);
    border: 1px solid rgba(235, 235, 235);
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -0.3rem; /* Centers thumb on the track */
    background-color: white;
    border: 1px solid rgba(235, 235, 235);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.175);
    height: 1rem;
    width: 1rem;

    border-radius: 50%;
  }
`;

export default SoundVolume;
