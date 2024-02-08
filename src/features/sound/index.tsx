import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpen } from "src/redux/settingsSlice";

import { selectSound, stopSound } from "src/redux/soundSlice";

const SoundEffect = () => {
  const { playing, src, repeat } = useSelector(selectSound);
  const openSetting = useSelector(selectOpen);

  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));

  const play = () => {
    if (audioRef.current.src !== src) audioRef.current.src = src;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    let count = openSetting ? 1 : repeat;
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
  }, [playing, src]);

  return null;
};

export default SoundEffect;
