import React from 'react'
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BreakLength = ({breakState, setBreakState, isPlay}) => {
    const breakdecrease = () => {
        if(isPlay) return;
        if(breakState.time > 1) 
          setBreakState((prev) => ({ time: prev.time - 1 , timer: (prev.time-1) * 60}));
        // console.log(breakState.time, breakState.timer); 
      }
    const breakincrease = () => {
        if(isPlay) return;
        if(breakState.time < 60)
          setBreakState((prev) => ({ time: prev.time + 1, timer: (prev.time+1) * 60}));
        // console.log(breakState.time, breakState.timer); 
      }
  return (
    <div>
        <h2 id="break-label">Break Length</h2>
        <Button id="break-decrement" onClick={breakdecrease}><ArrowDownwardIcon/></Button>
        <span id='break-length'>{breakState.time}</span>
        <Button id="break-increment" onClick={breakincrease}><ArrowUpwardIcon/></Button>
    </div>
  )
}

export default BreakLength