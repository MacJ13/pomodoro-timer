import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_SOUND_SRC } from "src/constants/constants";

import { selectSound, stopSound } from "src/redux/soundSlice";

const SoundEffect = () => {
  const { playing } = useSelector(selectSound);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(new Audio(INITIAL_SOUND_SRC));

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    let count = 1;
    let interval: number;

    const customPlay = () => {
      if (count > 0) {
        play();
        count--;
      } else {
        dispatch(stopSound());
        clearInterval(interval);
      }
    };

    if (playing) {
      interval = setInterval(customPlay, audioRef.current.duration * 1000);
      customPlay();
    }

    return () => {
      stop();
      if (interval) clearInterval(interval);
    };
  }, [playing]);

  return null;
};

export default SoundEffect;
