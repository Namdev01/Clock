import React, {useState} from 'react'
import Title from './Components/Title'
import Length from './Components/BreakSessionLength/Length'
import Timer from './Components/Timer'
import PlayPause from './Components/Play'
import './Style.css'

export default function App() {
  const [breakState, setBreakState] = useState({time: 5, timer: 5*60});
  const [sessionState, setSessionState] = useState({time: 25, timer: 25*60});
  const [isPlay, setIsPlay] = useState(false);
  const [isBreak, setIsBreak]= useState(false);
  return (
    <div id="app">
      <Title />
      <Length 
        breakState={breakState} 
        sessionState={sessionState} 
        setBreakState={setBreakState}
        setSessionState={setSessionState}
        isPlay={isPlay}
      />
      <Timer 
        breakState={breakState} 
        sessionState={sessionState} 
        setBreakState={setBreakState}
        setSessionState={setSessionState}
        isPlay={isPlay}
        isBreak={isBreak}
        setIsBreak={setIsBreak}
      />
      <PlayPause 
        breakState={breakState} 
        sessionState={sessionState} 
        setBreakState={setBreakState}
        setSessionState={setSessionState}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        isBreak={isBreak}
        setIsBreak={setIsBreak}
      />
    </div>
  );
}
