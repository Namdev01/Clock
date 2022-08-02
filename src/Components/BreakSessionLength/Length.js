import React from 'react'
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
const Length = ({breakState, sessionState, setBreakState, setSessionState, isPlay}) => {
  return (
    <div id='length-label'>
      <BreakLength
        breakState={breakState}
        setBreakState={setBreakState}
        isPlay={isPlay}
      />
      <SessionLength
        sessionState={sessionState}
        setSessionState={setSessionState}
        isPlay={isPlay}
      />
    </div>
  )
}

export default Length