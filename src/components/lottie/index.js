import React, { useState } from 'react';
import Lottie from 'react-lottie';

export const LottieHoverControl = ({ loop, autoplay, animationData }) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      onMouseEnter={() => setIsStopped(false)}
      onMouseLeave={() => setIsStopped(true)}
    >
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};

export const LottieClickControl = ({ loop, autoplay, animationData }) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div onClick={() => setIsStopped(!isStopped)}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
