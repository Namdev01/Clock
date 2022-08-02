import React, {useEffect} from 'react'

const Timer = ({breakState, sessionState, setBreakState, setSessionState, isPlay, isBreak, setIsBreak}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(isPlay === true) {
        if(isBreak === true) {
          setBreakState((prev) => ({ time: prev.time, timer: prev.timer - 1 }));
        } else {
          setSessionState((prev) => ({ time: prev.time, timer: prev.timer - 1 }));
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isPlay, isBreak]);
  // const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");
  if (breakState.timer === 0) {
    setIsBreak(() => false);
    setBreakState((prev) => ({ time: prev.time, timer: prev.time * 60 }));
  }
  if (sessionState.timer === 0) {
    setIsBreak(() => true);
    setSessionState((prev) => ({ time: prev.time, timer: prev.time * 60 }));
  }
  return (
    <div id='timer'>
      <h1 id="timer-label">{isBreak ? "Break" : "Session"}</h1>
      <span id='time-left'>
        {isBreak === false
        ? Math.floor(sessionState.timer / 60).toString().padStart(2, "0") + ":" + (sessionState.timer % 60).toString().padStart(2, "0")
        : Math.floor(breakState.timer / 60).toString().padStart(2, "0") + ":" + (breakState.timer % 60).toString().padStart(2, "0")}
      </span>
    </div>
  )
}

export default Timer