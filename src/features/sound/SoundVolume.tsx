import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeVolume, playSound, selectSound } from "src/redux/soundSlice";

import { Label } from "src/components/styles/Label.styled";
import { Flex } from "src/components/styles/Flex.styled";

const SoundVolume = () => {
  const { playing, volume } = useSelector(selectSound);

  const dispatch = useDispatch();

  const updateVolumeSound = (volume: number) => {
    dispatch(changeVolume(volume));
    if (!playing) dispatch(playSound());
  };

  const onHandleSlider = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const volume = Number((e.target as HTMLInputElement).value);
    updateVolumeSound(volume);
  };

  const currentVolume = Math.floor(volume * 10);

  return (
    <Flex $gap="1rem">
      <Label>{currentVolume}</Label>
      <VolumeSlider
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onClick={onHandleSlider}
        onInput={onHandleSlider}
      />
    </Flex>
  );
};

const VolumeSlider = styled.input`
  &[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 10rem;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.lightGrey};
    border: ${({ theme }) => theme.borders.volumeSlider};
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  &[type="range"]::-moz-range-track {
    background: ${({ theme }) => theme.colors.lightGrey};
    border: ${({ theme }) => theme.borders.volumeSlider};
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -0.3rem; /* Centers thumb on the track */
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.borders.volumeSlider};
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.175);
    height: 1rem;
    width: 1rem;

    border-radius: 50%;
  }
`;

export default SoundVolume;
