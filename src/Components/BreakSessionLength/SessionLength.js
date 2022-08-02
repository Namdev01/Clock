import React from 'react'
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SessionLength = ({sessionState, setSessionState, isPlay}) => {
    const sessiondecrease = () => {
        if(isPlay) return;
        if(sessionState.time>1) 
          setSessionState((prev) => ({ time: prev.time - 1, timer: (prev.time-1) * 60}));
        // console.log(sessionState.time, sessionState.timer);
      }
    const sessionincrease = () => {
        if(isPlay) return;
        if(sessionState.time < 60)
          setSessionState((prev) => ({ time: prev.time + 1, timer: (prev.time+1) * 60}));
        // console.log(sessionState.time, sessionState.timer);
      }
  return (
    <div>
        <h2 id="session-label">Session Length</h2>
        <Button id="session-decrement" onClick={sessiondecrease}><ArrowDownwardIcon/></Button>
        <span id='session-length'>{sessionState.time}</span>
        <Button id="session-increment" onClick={sessionincrease}><ArrowUpwardIcon/></Button>
    </div>
  )
}

export default SessionLength