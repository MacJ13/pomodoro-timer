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

  const onClickSlider = (e: React.MouseEvent<HTMLInputElement>) => {
    const volume = Number((e.target as HTMLInputElement).value);
    updateVolumeSound(volume);
  };

  const onChangeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value);
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
        onClick={onClickSlider}
        onInput={onChangeSlider}
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
