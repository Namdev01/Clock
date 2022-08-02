import React from 'react'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { Button } from '@mui/material';
const Play = ({breakState, sessionState, setBreakState, setSessionState, isPlay, setIsPlay, isBreak, setIsBreak}) => {
  const changePlay = () => {
    setIsPlay(() => !isPlay)
  }
  const resetTimer = () => {
    setIsPlay(() => false);
    setIsBreak(() => false);
    setBreakState(() => ({time: 5, timer: 5*60}));
    setSessionState(() => ({time: 25, timer: 25*60}));
  }
  return (
    <div id='play-pause'>
      <Button id="start_stop" onClick={changePlay} color="primary" variant="contained">
        {isPlay ? <PauseCircleOutlineOutlinedIcon /> : <PlayCircleFilledWhiteOutlinedIcon />}
      </Button>
      <Button id='reset' onClick={resetTimer} color="secondary" variant="contained">
        <RestartAltOutlinedIcon />
      </Button> 
    </div>
  )
}

export default Play